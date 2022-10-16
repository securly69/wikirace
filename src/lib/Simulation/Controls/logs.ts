import { logs } from '$lib/stores'

export const logAndRun = <T>(args: object, finish: T) => {
	logs.update((logs) => ({ ...logs, ...args }))

	return finish
}
