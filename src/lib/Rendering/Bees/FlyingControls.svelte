<script lang="ts">
	import { useFrame, type Position, type Rotation } from '@threlte/core'
	import { accelerate } from '$lib/Simulation/Physics/acceleration'
	import type { Readable } from 'svelte/store'

	export let position: Position | undefined = undefined
	export let rotation: Rotation | undefined = undefined

	const beeBox: HitBox = {
		x: 0,
		y: 0,
		angle: rotation?.y ?? 0,
		width: 10,
		height: 10
	}
	export let movement: Readable<MovementController>

	useFrame(() => {
		accelerate({
			thrust: -$movement.y / 2.4,
			breaks: 0,
			angle: $movement.x / 10
		})(beeBox)
		position = {
			x: Math.cos(beeBox.angle) * (beeBox.physics?.momentum.magnitude ?? 0) + (position?.x ?? 0),
			z: -Math.sin(beeBox.angle) * (beeBox.physics?.momentum.magnitude ?? 0) + (position?.z ?? 0)
		}
		rotation = {
			y: beeBox.angle
		}
	})
</script>

<slot {position} {rotation} />
