import { pipe } from '$lib/fp-ts'
import { config } from '$lib/stores'
import { distanceFromDestination } from '../Sensor.ts/destination'

let totalMapSize = 100
let MIN_FITNESS = -400
config.master.subscribe((props) => {
	const length = props.gridSize * 200
	totalMapSize = Math.sqrt(length ** 2 + length ** 2)
})
config.brain.subscribe(({ minFitness }) => {
	MIN_FITNESS = minFitness
})

export const rewardNetworks = (cars: Car[]) =>
	cars.map((car) => pipe(car, reward, convert(car.brain)))

const reward = (car: Car) =>
	car.performace + (distanceFromDestination(car) / totalMapSize) * MIN_FITNESS

export const fitness = (car: Car) => reward(car)

const convert = (ai: AI) => (reward: number) => ({
	...ai,
	reward
})

export const isolateBest = (networks: FitnessResults[]) => {
	networks.sort((a, b) => b.reward - a.reward)

	return networks[0]
}
