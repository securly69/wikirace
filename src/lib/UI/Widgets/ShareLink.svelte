<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { game } from '$lib/stores'
	import CopyToClipboard from '$lib/UI/Widgets/CopyToClipboard.svelte'
	import { addToast } from 'as-toast'

	let clipboard: any
	let gameLink: string

	// $: gameLink = `${$page.url.toString().split(base)[0]}${base}/game/${$game.id}`
	$: gameLink = `${$game.id}`

	const share = () => {
		const value = gameLink
		const app = new CopyToClipboard({
			target: clipboard,
			props: { value }
		})
		app.$destroy()
		addToast('Game ID copied!')
	}
</script>

<button class="button" on:click={share} on:keydown={share}> Click here to copy Game ID </button>

<div bind:this={clipboard} />
