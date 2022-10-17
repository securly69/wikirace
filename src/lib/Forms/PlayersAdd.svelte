<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { game, players } from '$lib/stores'
	import CopyToClipboard from '$lib/UI/Widgets/CopyToClipboard.svelte'
	import PlayerScoreViewer from '$lib/UI/Widgets/PlayerScoreViewer.svelte'
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
</script>

{#each $players as player}
	<PlayerScoreViewer {player} />
{/each}

<button class="button" on:click={share} on:keydown={share}> Click here to copy link </button>

{gameLink}

{#if $players.length === 1}
	<p>Cannot start game with only one player :)</p>
{/if}

<div bind:this={clipboard} />
