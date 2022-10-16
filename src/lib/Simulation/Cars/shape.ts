import { polyIntersect } from '$lib/utils'
import { cull } from '../Sensor.ts/collision'

export const polygon = (box: HitBox) => {
	const polygon: Polygon = []

	const rad = Math.hypot(box.width, box.height) / 2
	const alpha = Math.atan2(box.width, box.height)

	polygon.push([
		box.x - Math.sin(-box.angle - alpha) * rad,
		box.y - Math.cos(-box.angle - alpha) * rad
	])
	polygon.push([
		box.x - Math.sin(-box.angle + alpha) * rad,
		box.y - Math.cos(-box.angle + alpha) * rad
	])
	polygon.push([
		box.x - Math.sin(Math.PI - box.angle - alpha) * rad,
		box.y - Math.cos(Math.PI - box.angle - alpha) * rad
	])
	polygon.push([
		box.x - Math.sin(Math.PI - box.angle + alpha) * rad,
		box.y - Math.cos(Math.PI - box.angle + alpha) * rad
	])

	return { box, polygon }
}

export const collide = (obstacle: Obstacle) => (inputs: { box: HitBox; polygon: Polygon }) => {
	const { box, polygon } = inputs

	const poly = cull(box, obstacle)

	const crash = !poly.every((p) => polyIntersect(polygon, p))

	return crash
}

export const combine = (car: Car, borders: MapBorder, cars: Car[]) => {
	return {
		borders,
		polygons: cars
			.filter((c) => c !== car && distance(c.box, car.box) <= Math.max(c.box.width, c.box.height))
			.map((c) => polygon(c.box).polygon)
	}
}

const distance = (b1: HitBox, b2: HitBox) => Math.sqrt((b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2)
