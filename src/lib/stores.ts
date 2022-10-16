import { create } from '$lib/Simulation/Ai/network'
import { writable, type Writable } from 'svelte/store'

export const canvas = writable() as Writable<HTMLCanvasElement>
export const context = writable() as Writable<ContextProp>
export const mounted = writable() as Writable<boolean>
export const logs = writable({}) as Writable<{
	[key: string]: unknown
}>

export const configDefaults: {
	simulation: CONFIG.simulation
	master: CONFIG.master
	brain: CONFIG.brain
	controls: CONFIG.controls
} = Object.freeze({
	simulation: {
		currentId: 0,
		carSpots: [
			{
				box: {
					x: 100,
					y: 100,
					width: 30,
					height: 55,
					angle: 0
				},
				brain: create([1, 1]),
				destination: [0, 0],
				color: '#000',
				dead: true,
				fitness: 0,
				performace: 0,
				path: []
			}
		],
		world: {
			generatedMap: {
				map: [
					{
						draw: (ctx: ContextProp) => (size: Size) => null,
						rotate: 0
					}
				],
				connections: [[false, false, false, false]],
				borders: [
					[
						[
							[0, 0],
							[0, 0]
						]
					]
				]
			},
			dim: 1,
			size: {
				width: 1,
				height: 1
			},
			backgroundSaved: false
		},
		destroyed: false,
		layers: [6, 4, 6, 5]
	},
	master: {
		gridSize: 5,
		carAmount: 20
	},
	brain: {
		sensorCount: 5,
		sensorLength: 200,
		sensorSpread: Math.PI / 2,
		minFitness: -400
	},
	controls: {
		showNetwork: true,
		cameraFocus: 0,
		playerControls: false,
		drawSensors: false,
		cameraSpeed: 0.06,
		carThrust: 2,
		maxSpeed: 8,
		carTurnSpeed: 0.5,
		carBreakStrength: 0.4,
		friction: 0.04
	}
})

export const config = {
	simulation: writable<CONFIG.simulation>(configDefaults.simulation),
	master: writable<CONFIG.master>(configDefaults.master),
	brain: writable<CONFIG.brain>(configDefaults.brain),
	controls: writable<CONFIG.controls>(configDefaults.controls)
}

export const controlsHelpers: CONFIG.Helper = {
	master: {
		gridSize: {
			type: 'number',
			where: 'master',
			min: 2,
			max: 100,
			step: 1
		},
		carAmount: {
			type: 'number',
			where: 'master',
			min: 2,
			max: 1000,
			step: 10
		}
	},
	brain: {
		sensorCount: {
			type: 'number',
			where: 'brain',
			min: 1,
			max: 30,
			step: 1
		},
		sensorLength: {
			type: 'number',
			where: 'brain',
			min: 60,
			max: 300,
			step: 20
		},
		sensorSpread: {
			type: 'number',
			where: 'brain',
			min: 0,
			max: Math.PI,
			step: 0.3
		},
		minFitness: {
			type: 'number',
			where: 'brain',
			min: -3000,
			max: 0,
			step: 50
		}
	},
	controls: {
		cameraFocus: {
			type: 'number',
			where: 'controls',
			min: 0,
			max: 5,
			step: 1
		},
		playerControls: {
			type: 'checkbox',
			where: 'controls'
		},
		showNetwork: {
			type: 'checkbox',
			where: 'controls'
		},
		drawSensors: {
			type: 'checkbox',
			where: 'controls'
		},
		cameraSpeed: {
			type: 'number',
			where: 'controls',
			min: 0,
			max: 0.15,
			step: 0.001
		},
		carThrust: {
			type: 'number',
			where: 'controls',
			min: 1,
			max: 15,
			step: 1
		},
		carTurnSpeed: {
			type: 'number',
			where: 'controls',
			min: 0.3,
			max: 1.5,
			step: 0.1
		},
		carBreakStrength: {
			type: 'number',
			where: 'controls',
			min: 0.05,
			max: 0.3,
			step: 0.05
		},
		friction: {
			type: 'number',
			where: 'controls',
			min: 0.01,
			max: 1,
			step: 0.01
		},
		maxSpeed: {
			type: 'number',
			where: 'controls',
			min: 3,
			max: 20,
			step: 1
		}
	}
} as const

config.master.subscribe(
	({ carAmount }) =>
		((<CONFIG.NumberInput>controlsHelpers.controls.cameraFocus).max = carAmount - 1)
)
