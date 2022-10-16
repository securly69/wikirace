const TWO_PI = 2 * Math.PI

export const updatePath = (car: Car) => {
	car.path = car.path.filter((path) => distance([car.box.x, car.box.y], path) > 100)
	return car
}

const diverganceFromPath = (car: Car) => {
	const destination = car.path[0]
	if (!destination) return 0

	return (
		Math.atan((destination[0] - car.box.x) / (destination[1] - car.box.y)) -
		(car.box.y < destination[1] ? Math.PI : 0)
	)
}

export const destinationAngleAccuracy = (car: Car) =>
	Math.abs(((diverganceFromPath(car) + car.box.angle + TWO_PI) % TWO_PI) / TWO_PI - 0.5) * 4 - 1

const distance = (a: XYPosition, b: XYPosition) =>
	Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)

export const distanceFromDestination = (car: Car) =>
	distance(car.destination, [car.box.x, car.box.y])

export const drawDestinationPath = (car: Car) => (ctx: ContextProp) => {
	const [x, y] = car.destination
	ctx.fillStyle = 'purple'
	ctx.beginPath()
	ctx.arc(x, y, car.box.width / 2, 0, TWO_PI)
	ctx.fill()

	ctx.strokeStyle = 'purple'
	ctx.beginPath()
	ctx.setLineDash([9, 3])
	ctx.moveTo(car.box.x, car.box.y)
	ctx.lineTo(x, y)
	ctx.stroke()

	const angle = diverganceFromPath(car)

	const start: XYPosition = [car.box.x, car.box.y]
	const end: XYPosition = [car.box.x - Math.sin(angle) * 100, car.box.y - Math.cos(angle) * 100]

	ctx.strokeStyle = 'red'
	ctx.beginPath()
	ctx.setLineDash([9, 3])
	ctx.moveTo(...start)
	ctx.lineTo(...end)
	ctx.stroke()

	ctx.strokeStyle = 'blue'
	ctx.setLineDash([9, 3])
	ctx.beginPath()
	car.path.forEach((path, i) => (i === 0 ? ctx.moveTo(...path) : ctx.lineTo(...path)))
	ctx.stroke()

	return ctx
}
