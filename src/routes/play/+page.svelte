<script lang="ts">
	import LinkParser from '$lib/Race/LinkParser.svelte'
	import { onMount } from 'svelte'
	import { game, location, me } from '$lib/stores'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { browser } from '$app/environment'
	import GameShowWikiPage from '$lib/NoBackendFix/GameShowWikiPage.svelte'

	let win = true

	$: {
		if ($location === $game.route[$game.route.length - 1]) {
			win = true
		}
	}

	onMount(() => {
		if (browser && ($me.uid === null || $me.uid === '' || $me.gameId === '' || $location === '')) {
			goHome()
			return
		}
	})

	const goHome = () => {
		$game = {
			id: '',
			state: 'waiting',
			route: [],
			players: []
		}
		console.log('won')
		if (browser) goto(base)
	}
</script>

{#if win}
	<div class="winner">
		<div class="card">
			<p>You Won!</p>
			<p>You go to the end first!</p>
			<button class="button" on:click={goHome}>Go home</button>
		</div>
	</div>
{/if}

<GameShowWikiPage wiki={$location} let:html let:title>
	<section>
		<h1 id="firstHeading" class="firstHeading mw-first-heading">
			<span class="mw-page-title-main">{title ?? '[error]: missing title'}</span>
		</h1>
		<LinkParser {html} />
	</section>
</GameShowWikiPage>

<style>
	:global(body) {
		overflow-y: hidden !important;
	}

	section {
		max-width: 800px;
		padding: 4rem 1rem;
		margin: auto;
		position: relative;
		z-index: 0;
		font-size: 0.875em;
		line-height: 1.6;
	}

	:global(section .thumbinner) {
		max-width: 800px;
	}

	.winner {
		position: fixed;
		display: flex;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(219, 219, 219, 0.315);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}

	.card {
		text-align: center;
		padding: 1.5rem;
		background-color: var(--bg);
		border-radius: 1rem;
		box-shadow: 10px 10px 25px 40px #ccc6;
		display: flex;
		flex-direction: column;
	}
</style>
