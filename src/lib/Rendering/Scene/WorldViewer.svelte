<script lang="ts">
	import { Canvas } from '@threlte/core'
	import { HTML } from '@threlte/extras'
	import { Debug, World } from '@threlte/rapier'
	import Scene from './Scene.svelte'
	import Engine from './Engine.svelte'

	export let controls = false
	export let input: SimulationInput = null
</script>

<div class="wrapper">
	<Canvas>
		<World>
			{#if controls}
				<Debug depthTest={false} depthWrite={false} />
			{/if}

			<slot name="scene">
				<Engine {input}>
					<Scene />
				</Engine>
			</slot>

			<HTML slot="fallback" transform>
				<p class="text-xs">
					It seems your browser<br />
					doesn't support WASM.<br />
					I'm sorry.
				</p>
			</HTML>
		</World>
	</Canvas>
</div>

<slot />

<style>
	.wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: cornsilk;
	}
</style>
