<script lang="ts">
	import { game } from '$lib/stores'

	export let route: string[]
</script>

<p>
	Route:
	{#each route as link, index (link)}
		{#if $game.state === 'waiting'}
			<a target="_blank" href="https://en.wikipedia.org/wiki/{link}">
				{link}
			</a>
		{:else}
			{link}
		{/if}
		{#if index !== route.length - 1}
			->&nbsp;
		{/if}
	{/each}
</p>

<style>
	p {
		color: var(--primary);
	}
</style>
