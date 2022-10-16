import { pipe } from '$lib/fp-ts'
import { top, right, bottom, left } from './map'

export const initate = (index: number): Possibilities => ({
	connections: ConnectionReference[0].slice() as Connection,
	possibilities: new Array(ConnectionReference.length).fill(0).map((_, i) => i),
	index
})

const ConnectionReference: Connection[] = [
	[false, false, false, false],
	[true, true, true, true],

	[true, false, true, false],
	[false, true, false, true],
	[true, true, false, false],
	[false, false, true, true],

	[true, true, true, false],
	[true, true, false, true],
	[true, false, true, true],
	[false, true, true, true]
]

const EntropyReduction = [top, right, bottom, left]

export const collapse = (grid: number, possibilities: Possibilities[], collapse: Possibilities) => {
	const connections: Connection =
		ConnectionReference[
			collapse.possibilities[Math.floor(Math.random() * collapse.possibilities.length)]
		]

	connections.forEach((value, i) =>
		pipe(EntropyReduction[i](collapse.index, possibilities.length, grid), (change: number) => {
			const neighbor = (i + 2) % 4
			possibilities[change].connections[neighbor] = value
			possibilities[change].possibilities = possibilities[change].possibilities.filter(
				(x) => ConnectionReference[x][neighbor] === value
			)
		})
	)

	collapse.connections = connections
	collapse.possibilities = []
}
