import { pipe } from '$lib/fp-ts'
import { conditional, walls } from './render'
import { initate, collapse } from './collapse'

const possibilities = (grid: number): Possibilities[] =>
	new Array(grid ** 2).fill(null).map((_, i) => initate(i))

const sortEntropy = (a: Possibilities, b: Possibilities) =>
	a.possibilities.length - b.possibilities.length

const reduceEntropy =
	(grid: number) =>
	(possibilities: Possibilities[]): Connection[] => {
		if (possibilities.filter((p) => p.possibilities.length != 0).length == 0) {
			return possibilities.map((p) => p.connections)
		}

		const sorted = possibilities
			.slice()
			.sort(sortEntropy)
			.filter((v) => v.possibilities.length != 0)

		const collapsable = sorted.filter(
			(v) => v.possibilities.length == sorted[0].possibilities.length
		)

		collapse(grid, possibilities, collapsable[Math.floor(Math.random() * collapsable.length)])

		return reduceEntropy(grid)(possibilities)
	}

const render = (possibilities: Connection[]): RenderConfig[] =>
	possibilities.map((p) => conditional[p.reduce((v, c) => v + Number(c), 0)](p))

export const waveCollapseGenerate = (grid: number): MapGeneration =>
	pipe(possibilities(grid), reduceEntropy(grid), (connections) => ({
		connections,
		map: render(connections),
		borders: connections.reduce((p, c) => [...p, ...walls(c)], [] as MapBorder)
	}))
