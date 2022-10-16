import { config } from '$lib/stores'
import { fitness } from './reward'

let camera = 0
let MIN_FITNESS = 600
let PLAYER_CONTROLLING = false
config.controls.subscribe(({ cameraFocus, playerControls }) => {
	PLAYER_CONTROLLING = playerControls
	camera = cameraFocus
})
config.brain.subscribe(({ minFitness }) => {
	MIN_FITNESS = minFitness
})

export const removeDead = (cars: Car[]) => {
	cars.map((car) => killIfUnfit(car))

	const bestActor =
		cars
			.slice()
			.map((car, i) => ({ car, i }))
			.filter((which) => !which.car.dead)
			.sort((a, b) => b.car.fitness - a.car.fitness)[0]?.i ?? 0

	if (!PLAYER_CONTROLLING && camera != null && camera != bestActor) {
		config.controls.update((crtls) => ({
			...crtls,
			cameraFocus: bestActor
		}))
	}

	return cars.filter((car) => !car.dead) as Car[]
}

const killIfUnfit = (car: Car) =>
	car.dead ? null : fitnessCheck(car) < MIN_FITNESS ? (car.dead = true) : null

const fitnessCheck = (car: Car) => (car.fitness = fitness(car))
