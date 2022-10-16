import { pipe } from '$lib/fp-ts'
import { logs, mounted } from '$lib/stores'
import { coalesce } from '$lib/utils'

const BEST = 'bestNetwork'
let MOUNTED = false
mounted.subscribe((v) => (MOUNTED = v))

const save = (network: FitnessResults) => {
	if (!MOUNTED) return false
	try {
		localStorage.setItem(BEST, JSON.stringify(network))
	} catch (e) {
		return false
	}
	return true
}

const destroy = () => {
	if (!MOUNTED) return false
	try {
		localStorage.removeItem(BEST)
	} catch (e) {
		return false
	}
	return true
}

const read = (): string | null => {
	if (!MOUNTED) return null
	try {
		return localStorage.getItem(BEST)
	} catch (e) {
		return null
	}
}

export const storeLocally = (network: FitnessResults) => save(network)

export const storeCloud = (network: FitnessResults) => true

const readLocally = () => JSON.parse(read() ?? 'null') as FitnessResults | null

const readCloud = readLocally

export const readStorage = () =>
	pipe(
		readLocally(),
		coalesce<FitnessResults | null, FitnessResults | null>((r) => r, readCloud)
	)

export const removeLocalStorage = destroy

export const validateIfImproved = (result: FitnessResults) => {
	const best = readStorage()

	logs.update((logs) => ({
		...logs,
		curReward: result.reward,
		bestReward: best?.reward
	}))

	return best == null ? result : best.reward < result.reward ? result : null
}
