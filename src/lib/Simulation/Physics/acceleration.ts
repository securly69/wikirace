import { pipe } from '$lib/fp-ts'
import { config } from '$lib/stores'

let FRICTION = 0.01
// let FRICTION = 0.04
let MAX_SPEED = 5
config.controls.subscribe(({ friction, maxSpeed }) => {
	FRICTION = friction
	MAX_SPEED = maxSpeed
})

export const accelerate = (actions: CarActions) => (box: HitBox) =>
	pipe(actions, velocity(box), apply(box))

const velocity = (box: HitBox) => (actions: CarActions) => {
	const mass = box.physics?.mass ?? 10
	const momentum: Vector = box.physics?.momentum ?? {
		direction: 0,
		magnitude: 0
	}

	const { thrust, breaks, angle } = actions

	const acceleration = thrust / mass
	const velocity = Math.max(Math.min(momentum.magnitude + acceleration, MAX_SPEED), -MAX_SPEED)

	box.physics = {
		mass,
		momentum: {
			...momentum,
			magnitude: Math.max(Math.abs(velocity) - FRICTION - breaks, 0) * (velocity < 0 ? -1 : 1)
		}
	}

	box.angle = (box.angle + angle * velocity + Math.PI * 2) % (Math.PI * 2)

	return velocity
}

const apply = (box: HitBox) => (velocity: number) => {
	box.x += Math.sin(box.angle) * velocity
	box.y -= Math.cos(box.angle) * velocity

	return box
}
