<script lang="ts">
	import { base } from '$app/paths'
	import { GLTF, HTML } from '@threlte/extras'
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { AutoColliders } from '@threlte/rapier'
	import Bee from './Bee.svelte'
	import FlyingControls from './FlyingControls.svelte'
	import { useArrows } from '../Controllers/useArrows'

	const getRandom = () => Math.random() * 5 - 2.5

	const bees = [
		{
			text: 'hi anna!',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		},
		{
			text: 'i love you!',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		},
		{
			text: 'miss u so much',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		},
		{
			text: 'hehe cute bees',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		},
		{
			text: 'is this cool?',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		},
		{
			text: 'one last bee!',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		},
		{
			text: 'bye bye~',
			pos: {
				y: getRandom(),
				z: getRandom()
			}
		}
	]
</script>

<DirectionalLight position={{ y: 5, x: 8, z: -3 }} />

<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
	<GLTF
		castShadow
		url={base + '/models/wheat_farm_at_sunset/scene.gltf'}
		scale={400}
		position={{ y: -300, x: -700 }}
	/>
</AutoColliders>

<FlyingControls let:position let:rotation movement={useArrows()}>
	<Bee {position} {rotation}>
		<PerspectiveCamera
			rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 70 * DEG2RAD }}
			position={{ y: 5, x: 10 }}
			fov={60}
		/>
	</Bee>
</FlyingControls>

<HTML rotation={{ y: 90 * DEG2RAD }} transform position={{ x: 3 }}>
	<p class="text-xs text-black">hi anna! used the Arrows to fly ~</p>
</HTML>

{#each bees as bee, index}
	<Bee position={{ ...bee.pos, x: -80 * index - 60 }} rotation={{ y: 182.5 * DEG2RAD }}>
		<HTML rotation={{ y: 270 * DEG2RAD }} transform position={{ x: 3 }}>
			<p class="text-xs text-black">{bee.text}</p>
		</HTML>
	</Bee>
{/each}
