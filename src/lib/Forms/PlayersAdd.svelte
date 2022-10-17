<script lang="ts">
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { game, players } from '$lib/stores'
	import CopyToClipboard from '$lib/UI/Widgets/CopyToClipboard.svelte'
	import PlayerScoreViewer from '$lib/UI/Widgets/PlayerScoreViewer.svelte'
	import { addToast } from 'as-toast'

	let clipboard: any
	let gameLink: string

	// subscribe to firebase

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
		goto(`${base}/countdown`)
	}

	const quickadd = () => {
		$players = [
			...$players,
			{
				name: 'nameValue',
				uid: '',
				color: '#f00',
				score: 0,
				progress: {
					linkHistory: [],
					linksProgressed: 0,
					backNavs: 0,
					isCriticallyClose: false,
					timesCriticallyClose: 0
				}
			}
		]
	}
</script>

{#each $players as player}
	<PlayerScoreViewer {player} />
{/each}

{#if $players.length === 1}
	<p on:click={quickadd}>Cannot start game with only one player :)</p>
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
