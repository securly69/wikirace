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
			<span> {link} </span>
		{/if}
		{#if index !== route.length - 1}
			→
		{/if}
	{/each}
</p>

<style>
	p {
		color: var(--text);
		user-select: none;
	}
	span {
		color: var(--primary);
	}
	a {
		user-select: unset;
	}
</style>
