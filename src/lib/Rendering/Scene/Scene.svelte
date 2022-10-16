<script lang="ts">
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import GeneratedCity from '$lib/Rendering/City/GeneratedCity.svelte'
	import Traffic from '../Car/Traffic.svelte'

	const TOPDOWN_VIEW = {
		type: 0,
		rotation: { x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 0 },
		position: { y: 100, x: 10 }
	}
	const BEHIND_VIEW = {
		type: 1,
		rotation: { x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 70 * DEG2RAD },
		position: { y: 5, x: 10 }
	}
	const INSIDE_VIEW = {
		type: 2,
		rotation: { x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 90 * DEG2RAD },
		position: { y: 0.8, x: -0.25, z: 0.35 }
	}

	const VIEWS = [TOPDOWN_VIEW, BEHIND_VIEW, INSIDE_VIEW]

	let cameraView = BEHIND_VIEW

	const toggleCamera = () => {
		cameraView = VIEWS[(cameraView.type + 1) % VIEWS.length]
	}
</script>

<svelte:window on:click={toggleCamera} />

<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

<GeneratedCity>
	<Traffic>
		<PerspectiveCamera {...cameraView} fov={60} />
	</Traffic>
</GeneratedCity>
