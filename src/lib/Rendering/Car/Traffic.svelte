<script lang="ts">
	import CarComponent from './Car.svelte'
	import { config } from '$lib/stores'
	import BotDriver from './BotDriver.svelte'

	const { master, simulation, controls } = config
</script>

{#each $simulation.carSpots as car, index}
	<BotDriver let:movement>
		<CarComponent
			position={{ x: (car.box.y / 200) * 16, z: (car.box.x / 200) * 16, y: 1 }}
			rotation={{ y: car.box.angle }}
			{movement}
		>
			{#if index == $controls.cameraFocus}
				<slot />
			{/if}
		</CarComponent>
	</BotDriver>
{/each}
