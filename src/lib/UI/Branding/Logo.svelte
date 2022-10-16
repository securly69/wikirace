<script lang="ts">
	import { base } from '$app/paths'
	export let url: string = base + '/logo/logo_main.png'

	export let width = 200
	export let height = 150
</script>

{#if url}
	<div style="background-image: url({url}); width: {width}px; height: {height}px;" />
{/if}

<style>
	div {
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
		margin: auto;
		max-width: 100%;
	}
</style>
