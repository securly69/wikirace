import { derived, get, writable, type Readable } from 'svelte/store'

export const useBot = (): [
	Readable<MovementController>,
	{
		onKeyUp: (key: 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown') => void
		onKeyDown: (key: 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown') => void
	}
] => {
	const botControls = {
		ArrowUp: false,
		ArrowLeft: false,
		ArrowRight: false,
		ArrowDown: false
	}

	const wasdKeys = writable(botControls)

	const onKeyDown = (key: keyof typeof botControls) => {
		if (!Object.keys(get(wasdKeys)).includes(key)) return
		wasdKeys.update((keys) => {
			keys[key] = true
			return keys
		})
	}

	const onKeyUp = (key: keyof typeof botControls) => {
		if (!Object.keys(get(wasdKeys)).includes(key)) return
		wasdKeys.update((keys) => {
			keys[key] = false
			return keys
		})
	}

	const inputer = { onKeyDown, onKeyUp }

	const wasd = derived(wasdKeys, (wasdKeys) => {
		return {
			x: 0 + (wasdKeys.ArrowRight ? 1 : 0) - (wasdKeys.ArrowLeft ? 1 : 0),
			y: 0 + (wasdKeys.ArrowUp ? 1 : 0) - (wasdKeys.ArrowDown ? 1 : 0)
		}
	})

	return [wasd, inputer]
}
