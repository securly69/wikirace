<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { updateDocument } from '$lib/firebase/firestore'
	import { game, me } from '$lib/stores'
	import PlayerScoreViewer from '$lib/Race/PlayerScoreViewer.svelte'
	import RouteViewer from '$lib/Race/RouteViewer.svelte'
	import ShareLink from '$lib/UI/Widgets/ShareLink.svelte'
	import { fly } from 'svelte/transition'
	import Icon from '@iconify/svelte'
	import { removeLocalStorage } from '$lib/Race/storage'

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

	const reset = () => {
		removeLocalStorage()
		$me = { ...$me, gameId: '' }
		$game = { ...$game, id: '' }
	}
</script>

<div class="flex">
	<button class="button back-btn" on:click={reset}>
		<Icon icon="fluent:arrow-reset-24-filled" width={25} />
	</button>
</div>

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

<!-- <p style="user-select: unset;">
	{gameLink}
</p> -->
<style>
	p {
		word-break: break-all;
	}

	.back-btn {
		padding: 0.7rem 2.3rem;
		background: rgba(253, 155, 8, 0.877);
		color: rgb(255, 253, 236);
	}
</style>
