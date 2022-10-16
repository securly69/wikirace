import { pipe } from '$lib/fp-ts'
import { controlCars, sensors, updateCars } from '$lib/Simulation/Cars/car'
import { logs, config, configDefaults } from '$lib/stores'
import { coalesce, lerp, split } from '$lib/utils'
import { waveCollapseGenerate } from '$lib/Simulation/Road/generate'
import { LANE_AMOUNT } from '$lib/Simulation/Road/render'
import { removeDead } from '$lib/Simulation/Ai/death'
import { ai } from '$lib/Simulation/Ai/run'
import { create } from '$lib/Simulation/Ai/network'
import { rewardNetworks, isolateBest } from '$lib/Simulation/Ai/reward'
import {
	readStorage,
	storeCloud,
	storeLocally,
	validateIfImproved
} from '$lib/Simulation/Ai/storage'
import { mutate } from '$lib/Simulation/Ai/mutate'
import { astar, tileXY } from './Road/map'

const { simulation, master } = config

const TILE_SIZE = 200
const carWidth = (TILE_SIZE / LANE_AMOUNT) * 0.6
const colors: Color[] = ['#0f0', '#000', '#0ff', '#f0f', '#fff']

let MASTER: CONFIG.master = configDefaults.master
let SIMULATION: CONFIG.simulation = configDefaults.simulation
master.subscribe((props) => (MASTER = props))
simulation.subscribe((props) => (SIMULATION = props))

const createNewCar = (
	generatedMap: MapGeneration,
	sensorCount: number,
	previousBestBrain: AI | null
) => {
	const gridSize = Number(MASTER.gridSize)

	const available = generatedMap.connections
		.map((connection, tile) => ({ connection, tile }))
		.filter((tile) => tile.connection.includes(true))

	const startTileIndex = Math.floor(Math.random() * available.length)

	const start = available[startTileIndex].tile

	const longestPath = available
		.map((a) => ({ ...a, path: astar({ map: generatedMap.connections, start, end: a.tile }) }))
		.reduce((best, cur) => (best.path.length > cur.path.length ? best : cur))
	const end = longestPath.tile
	const path = longestPath.path.map(
		(path) => tileXY(path, gridSize).map((v) => v * 200 + 100) as XYPosition
	)

	const [tileX, tileY] = tileXY(start, gridSize)
	const destination = tileXY(end, gridSize).map((v) => v * 200 + 100) as XYPosition

	const direction =
		((longestPath.path[1] + gridSize + 1) % generatedMap.connections.length) -
		((longestPath.path[0] + gridSize + 1) % generatedMap.connections.length)
	const angle =
		direction === 1
			? Math.PI / 2
			: direction === gridSize
			? Math.PI
			: direction === -gridSize
			? 0
			: (3 * Math.PI) / 2

	return {
		brain: pipe(
			previousBestBrain,
			coalesce(mutate, () => create([sensorCount * 2 + 1, ...SIMULATION.layers]))
		),
		box: {
			x:
				tileX * TILE_SIZE +
				lerp(0, TILE_SIZE, (Math.floor(1 + Math.random() * (LANE_AMOUNT - 2)) + 0.5) / LANE_AMOUNT),
			y:
				tileY * TILE_SIZE +
				lerp(0, TILE_SIZE, (Math.floor(1 + Math.random() * (LANE_AMOUNT - 2)) + 0.5) / LANE_AMOUNT),
			width: carWidth,
			height: carWidth * 1.6,
			angle,
			physics: {
				momentum: {
					direction: 0,
					magnitude: 0
				},
				mass: Math.random() * 5 + 5
			}
		},
		destination,
		color: colors[Math.floor(Math.random() * colors.length)],
		dead: false,
		fitness: 0,
		performace: 0,
		path
	}
}

export const generate = (brain: CONFIG.brain, input: SimulationInput) => {
	const currentId = null

	const generatedMap = waveCollapseGenerate(Number(MASTER.gridSize))

	const world = input?.world ?? {
		generatedMap,
		dim: MASTER.gridSize,
		size: {
			width: MASTER.gridSize * TILE_SIZE,
			height: MASTER.gridSize * TILE_SIZE
		},
		backgroundSaved: false
	}

	const previousBestBrain = pipe(
		readStorage(),
		coalesce(
			(network: AI) => (brain.sensorCount === network.layers[0].inputs.length ? network : null),
			() => null
		)
	)

	const carSpots =
		input?.carSpots ??
		new Array(MASTER.carAmount)
			.fill(configDefaults.simulation.carSpots[0])
			.map(() => createNewCar(generatedMap, brain.sensorCount, previousBestBrain))

	return {
		world,
		carSpots,
		currentId
	}
}

export const start = () => requestAnimationFrame(loop)

const shouldStop = (id: number) => SIMULATION.destroyed || SIMULATION.currentId != id

const loop = (time: number, last = time, id = Math.random()) => {
	if (SIMULATION.currentId == null) SIMULATION.currentId = id
	if (shouldStop(id)) return
	if (runPhysics()) {
		finishAndRestart()
		return
	}
	logs.update((logs) => ({
		...logs,
		fps: Math.round(1 / ((time - last) / 1000))
	}))
	requestAnimationFrame((newFrame) => loop(newFrame, time, id))
}

const finishAndRestart = () =>
	pipe(
		SIMULATION.carSpots,
		rewardNetworks,
		isolateBest,
		validateIfImproved,
		coalesce(split(storeLocally, storeCloud), () => [true]),
		(success) =>
			success.every((test) => test)
				? requestAnimationFrame(() => master.update((master) => ({ ...master })))
				: alert('error! could not save to each storage')
	)

const runPhysics = () =>
	pipe(
		SIMULATION.carSpots,
		updateCars(SIMULATION.world),
		removeDead,
		sensors(SIMULATION.world.generatedMap.borders),
		ai,
		controlCars(SIMULATION.world)
	).every((car) => car == null)
