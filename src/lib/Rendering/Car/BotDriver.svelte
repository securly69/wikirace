<script lang="ts">
	import { useBot } from '../Controllers/useBot'
	import { useFrame } from '@threlte/core'
	import { useArrows } from '../Controllers/useArrows'

	const arrowCon = useArrows()
	const [movement, setInputs] = useBot()

	const start = {
		up: () => setInputs.onKeyDown('ArrowUp'),
		right: () => setInputs.onKeyDown('ArrowRight'),
		down: () => setInputs.onKeyDown('ArrowDown'),
		left: () => setInputs.onKeyDown('ArrowLeft')
	} as const
	const stop = {
		up: () => setInputs.onKeyUp('ArrowUp'),
		right: () => setInputs.onKeyUp('ArrowRight'),
		down: () => setInputs.onKeyUp('ArrowDown'),
		left: () => setInputs.onKeyUp('ArrowLeft')
	} as const
</script>

<slot movement={arrowCon} />
