import { pipe } from '$lib/fp-ts'
import { config } from '$lib/stores'
import { drawCars } from '../Cars/car'
import { roads } from '../Road/road'
import { drawSensor } from '../Sensor.ts/sensor'

type Direction = 0 | -1 | 1

type DisplayWrap = [Direction, Direction][]

const wrapDirections: DisplayWrap = [
	[-1, -1],
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
	[1, -1],
	[-1, 1],
	[1, 1]
]

export const city = (world: World, camera: HitBox, cars: Car[], dim: Size) =>
	tile(
		world,
		wrapDirections.filter((direction) => {
			// todo: only render visible tiles
			return true
		}),
		cars
	)

let DRAW_SENSORS = false
let CAR_FOCUS = 0
config.controls.subscribe(({ drawSensors, cameraFocus }) => {
	CAR_FOCUS = cameraFocus
	DRAW_SENSORS = drawSensors
})

const tile = (world: World, wrap: DisplayWrap, cars: Car[]) => {
	const draw = (ctx: ContextProp) =>
		pipe(
			ctx,
			roads(world),
			drawCars(cars),
			DRAW_SENSORS ? drawSensor(cars[CAR_FOCUS], world.generatedMap.borders, cars) : (c) => c
		)

	return (ctx: ContextProp) => {
		wrap.forEach((dir) => {
			ctx.save()
			ctx.translate(world.size.width * dir[0], world.size.height * dir[1])
			draw(ctx)
			ctx.restore()
		})
		return draw(ctx)
	}
}

export const clean = (size: Size) => (ctx: ContextProp) => {
	ctx.clearRect(0, 0, size.width, size.height)
	return ctx
}
