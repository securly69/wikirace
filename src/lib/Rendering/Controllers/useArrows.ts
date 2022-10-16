import { onDestroy } from 'svelte'
import { derived, get, writable } from 'svelte/store'

export const useArrows = () => {
	const wasdKeys = writable({
		ArrowUp: false,
		ArrowLeft: false,
		ArrowRight: false,
		ArrowDown: false
	})

	const onKeyDown = (e: KeyboardEvent) => {
		if (!Object.keys(get(wasdKeys)).includes(e.key)) return
		wasdKeys.update((keys) => {
			keys[e.key as keyof typeof keys] = true
			return keys
		})
	}

	const onKeyUp = (e: KeyboardEvent) => {
		if (!Object.keys(get(wasdKeys)).includes(e.key)) return
		wasdKeys.update((keys) => {
			keys[e.key as keyof typeof keys] = false
			return keys
		})
	}

	const wasd = derived(wasdKeys, (wasdKeys) => {
		return {
			x: 0 + (wasdKeys.ArrowRight ? 1 : 0) - (wasdKeys.ArrowLeft ? 1 : 0),
			y: 0 + (wasdKeys.ArrowUp ? 1 : 0) - (wasdKeys.ArrowDown ? 1 : 0)
		}
	})

	window.addEventListener('keydown', onKeyDown)
	window.addEventListener('keyup', onKeyUp)
	onDestroy(() => {
		window.removeEventListener('keydown', onKeyDown)
		window.removeEventListener('keyup', onKeyUp)
	})

	return wasd
}
