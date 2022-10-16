import { pipe } from '$lib/fp-ts'
import { context, config } from '$lib/stores'
import { lerp, intersection } from '$lib/utils'
import { combine } from '../Cars/shape'
import { visable } from './collision'
import { drawDestinationPath } from './destination'

let RAY_COUNT = 3
let RAY_LENGTH = 100
let RAY_SPREAD = Math.PI / 4
let ctx: ContextProp

context.update((context) => (ctx = context))

config.brain.subscribe(({ sensorCount, sensorLength, sensorSpread }) => {
	RAY_COUNT = sensorCount
	RAY_LENGTH = sensorLength
	RAY_SPREAD = sensorSpread
})

export const sense =
	(obstacle: Obstacle) =>
	(box: HitBox): Ray[] =>
		pipe(visable(box, obstacle), (visable) =>
			new Array(RAY_COUNT * 2).fill(0).map((_, i) => {
				const angle =
					(i % 2) * Math.PI +
					lerp(
						RAY_SPREAD / 2,
						-RAY_SPREAD / 2,
						RAY_COUNT == 1 ? 0.5 : Math.floor(i / 2) / (RAY_COUNT - 1)
					) -
					box.angle
				const start: XYPosition = [box.x, box.y]
				const end: XYPosition = [
					box.x - Math.sin(angle) * RAY_LENGTH,
					box.y - Math.cos(angle) * RAY_LENGTH
				]
				const contacts = visable
					.map((wall) => intersection(start, end, ...wall))
					.filter((intersection) => intersection != null) as Intersection[]
				contacts.sort((a, b) => a.offset - b.offset)
				return { start, end, contacts }
			})
		)

export const drawSensors = (cars: Car[], borders: MapBorder) => (ctx: ContextProp) =>
	cars.map((car) => drawSensor(car, borders, cars))[0]

export const drawSensor = (car: Car, borders: MapBorder, cars: Car[]) => (ctx: ContextProp) =>
	pipe(car.box, sense(combine(car, borders, cars)), draw(ctx), drawDestinationPath(car))

const draw = (ctx: ContextProp) => (rays: Ray[]) =>
	rays.map((ray) => {
		const end = ray.contacts[0]?.position ?? ray.end

		ctx.lineWidth = 2
		ctx.strokeStyle = 'yellow'
		ctx.beginPath()
		ctx.moveTo(...ray.start)
		ctx.lineTo(...end)
		ctx.stroke()

		ctx.strokeStyle = 'black'
		ctx.beginPath()
		ctx.moveTo(...ray.end)
		ctx.lineTo(...end)
		ctx.stroke()

		return ctx
	})[0]
