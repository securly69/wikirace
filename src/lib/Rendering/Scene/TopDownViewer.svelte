<script lang="ts">
	import { pipe } from '$lib/fp-ts'
	import { ControlsConfig } from '$lib/Simulation/Controls/controls'
	import { city, clean } from '$lib/Simulation/Environment/city'
	import { onMount } from 'svelte'
	import { canvas, context, config, mounted } from '$lib/stores'
	import { camera, restore } from '$lib/Simulation/Environment/camera'
	import { renderNetwork } from '$lib/Simulation/Ai/render'
	import Engine from './Engine.svelte'

	export let debug = false
	export let input: SimulationInput = null

	const { simulation, controls } = config

	$controls.showNetwork = debug

	let canvasElement: HTMLCanvasElement
	let innerWidth: number
	let innerHeight: number

	onMount(() => {
		canvas.set(canvasElement)
		context.set($canvas.getContext('2d') as ContextProp)
		loop()
	})

	const render = (time: number) => pipe(time, renderCamera, loop)

	const loop = () => ($simulation.destroyed ? null : requestAnimationFrame(render))

	const renderCamera = (time: number) =>
		pipe(
			$context,
			clean({ width: $canvas.width, height: $canvas.height }),
			camera($simulation.carSpots[$controls.cameraFocus]),
			city(
				$simulation.world,
				$simulation.carSpots[$controls.cameraFocus]?.box,
				$simulation.carSpots,
				{
					width: $canvas.width,
					height: $canvas.height
				}
			),
			restore,
			renderNetwork($controls.showNetwork, time)
		)
</script>

<svelte:window
	on:keydown={ControlsConfig.onkeydown}
	on:keyup={ControlsConfig.onkeyup}
	bind:innerWidth
	bind:innerHeight
/>

<section class="view">
	<canvas id="background-canvas" style="display: none" />
	<canvas bind:this={canvasElement} width={innerWidth} height={innerHeight} />
	<canvas id="network-canvas" width={innerWidth / 2.5} height={innerHeight / 2.5} />

	<slot />
</section>

<Engine {input} />

<style>
	section {
		position: relative;
		display: grid;
	}
	#background-canvas {
		display: none;
	}
	#network-canvas {
		position: absolute;
		left: 0;
		bottom: 0;
		opacity: 0.85;
	}
</style>
