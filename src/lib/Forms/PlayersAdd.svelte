<script lang="ts">
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { updateDocument, uploadDocument } from '$lib/firebase/firestore'
	import { game } from '$lib/stores'
	import CopyToClipboard from '$lib/UI/Widgets/CopyToClipboard.svelte'
	import PlayerScoreViewer from '$lib/UI/Widgets/PlayerScoreViewer.svelte'
	import RouteViewer from '$lib/UI/Widgets/RouteViewer.svelte'
	import { addToast } from 'as-toast'

	let clipboard: any
	let gameLink: string

	$: gameLink = `${$page.url.toString().split(base)[0]}${base}/game/${$game.id}`

	const share = () => {
		const value = gameLink
		const app = new CopyToClipboard({
			target: clipboard,
			props: { value }
		})
		app.$destroy()
		addToast('Link copied!')
	}

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

{#each $game.players as player}
	<PlayerScoreViewer {player} />
{/each}

{#if $game.players.length === 1}
	<p>Cannot start game with only one player :)</p>
{:else}
	<button class="button" on:click={start} on:keydown={start}> Start Game </button>
{/if}

<button class="button" on:click={share} on:keydown={share}> Click here to copy link </button>

<p>
	{gameLink}
</p>

<div bind:this={clipboard} />

<style>
	p {
		word-break: break-all;
	}
</style>
