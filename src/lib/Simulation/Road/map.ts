export const top = (tile: number, length: number, width: number) => (tile - width + length) % length

export const right = (tile: number, length: number, width: number) => {
	let right = (tile + 1) % length
	right = Math.abs((right % width) - (tile % width)) > 1 ? (right - width + length) % length : right
	return right
}

export const bottom = (tile: number, length: number, width: number) => (tile + width) % length

export const left = (tile: number, length: number, width: number) => {
	let left = (tile - 1 + length) % length
	left = Math.abs((left % width) - (tile % width)) > 1 ? (left + width) % length : left
	return left
}

export const astar = (props: AstarProps) => {
	const width = Math.sqrt(props.map.length)
	const costs = props.map.map((_) => Infinity)
	const guesses = props.map.map((_) => Infinity)

	costs[props.start] = 0
	guesses[props.start] = heuristic(tileXY(props.start, width), tileXY(props.end, width))

	return step({
		...props,
		width,
		open: [props.start],
		closed: [],
		costs,
		guesses,
		cameFrom: props.map.map((_) => 0)
	})
}

const step = (
	props: AstarProps & {
		width: number
		open: number[]
		closed: number[]
		costs: number[]
		guesses: number[]
		cameFrom: number[]
	}
): number[] => {
	const { map, start, end, width, open, closed, costs, guesses, cameFrom } = props

	const predictDistance = (tile: number) => heuristic(tileXY(tile, width), tileXY(end, width))

	const distances = open.map((tile) => predictDistance(tile))

	const closest = distances.reduce((winner, dist, i) => (dist < distances[winner] ? i : winner), 0)

	const current = open[closest]

	open.splice(closest, 1)
	closed.push(current)
	;(
		map[current]
			.map((connected, dir) => (connected ? direction[dir](current, map.length, width) : null))
			.filter((v) => v != null) as number[]
	)
		.filter((v: number) => !closed.includes(v))
		.forEach((neighbor) => {
			const weight = 1
			const tentativeCost = costs[current] + weight

			if (tentativeCost < costs[neighbor]) {
				cameFrom[neighbor] = current
				costs[neighbor] = tentativeCost
				guesses[neighbor] = tentativeCost + predictDistance(neighbor)

				if (!open.includes(neighbor)) {
					open.push(neighbor)
				}
			}
		})

	return open.length === 0
		? []
		: current === end
		? reconstructPath(cameFrom, current, start)
		: step(props)
}

const reconstructPath = (
	cameFrom: number[],
	current: number,
	start: number,
	path: number[] = [current]
): number[] =>
	current === start
		? path
		: reconstructPath(cameFrom, cameFrom[current], start, [cameFrom[current], ...path])

export const tileXY = (tile: number, width: number): XYPosition => [
	tile % width,
	Math.floor(tile / width)
]

const heuristic = (a: XYPosition, b: XYPosition) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])

const direction = [top, right, bottom, left]
