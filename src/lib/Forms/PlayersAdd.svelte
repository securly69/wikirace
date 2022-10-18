<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { updateDocument } from '$lib/firebase/firestore'
	import { game } from '$lib/stores'
	import PlayerScoreViewer from '$lib/Race/PlayerScoreViewer.svelte'
	import RouteViewer from '$lib/Race/RouteViewer.svelte'
	import ShareLink from '$lib/UI/Widgets/ShareLink.svelte'
	import { fly } from 'svelte/transition'

	let gameLink: string

	$: gameLink = `${$page.url.toString().split(base)[0]}${base}/game/${$game.id}`

	const start = () => {
		$game = { ...$game, state: 'countdown' }

		updateDocument({
			type: 'game',
			id: $game.id,
			content: $game
		})
	}
</script>

<RouteViewer route={$game.route} />

{#each $game.players as player (player.uid)}
	<div in:fly={{ y: 20 }} out:fly={{ x: 100 }}>
		<PlayerScoreViewer {player} />
	</div>
{/each}

{#if $game.players.length === 1}
	<p>Cannot start game with only one player :)</p>
{:else}
	<button class="button" on:click={start} on:keydown={start}> Start Game </button>
{/if}

<ShareLink />

<p>
	{gameLink}
</p>

<style>
	p {
		word-break: break-all;
	}
</style>
