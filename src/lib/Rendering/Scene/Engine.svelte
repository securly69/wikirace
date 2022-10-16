<script lang="ts">
	import { onMount } from 'svelte'
	import { config, mounted } from '$lib/stores'
	import { onDestroy } from 'svelte'
	import { generate, start } from '$lib/Simulation/engine'
	import { removeLocalStorage } from '$lib/Simulation/Ai/storage'

	export let input: SimulationInput

	const { master, simulation, brain, controls } = config

	onMount(() => {
		$mounted = true
		$simulation.destroyed = false
	})
	onDestroy(() => {
		$simulation.destroyed = true
		$mounted = false
	})

	$: {
		$master
		config.simulation.update((simulation) => ({
			...simulation,
			...generate($brain, input)
		}))
	}
	$: {
		$brain
		removeLocalStorage()
	}
	$: {
		$master
		if ($mounted) start()
	}
</script>

<slot />
