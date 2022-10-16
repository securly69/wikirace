import { config } from '$lib/stores'

let cameraAngle = 0
let CAMERA_SPEED = 0.06
config.controls.subscribe(({ cameraSpeed }) => {
	CAMERA_SPEED = cameraSpeed
})

export const camera = (car: Car) => (ctx: ContextProp) => {
	ctx.save()
	if (car) {
		const diff = car.box.angle - cameraAngle
		const dir =
			diff > Math.PI
				? car.box.angle - Math.PI * 2 - cameraAngle
				: diff < -Math.PI
				? car.box.angle + Math.PI * 2 - cameraAngle
				: diff

		cameraAngle = (cameraAngle + dir * CAMERA_SPEED + Math.PI * 2) % (Math.PI * 2)

		ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
		ctx.rotate(-cameraAngle)
		ctx.translate(-car.box.x, -car.box.y)
	}
	return ctx
}

export const restore = (ctx: ContextProp) => {
	ctx.restore()
	return ctx
}
