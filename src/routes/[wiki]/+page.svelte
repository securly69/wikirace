<script lang="ts">
	import type { PageData } from './$types'
	import { game, players } from '$lib/stores'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import LinkParser from '$lib/Race/LinkParser.svelte'
	// import SocketMessages from '$lib/Race/SocketMessages.svelte'

	export let data: PageData

	let { html, title } = data
	$: ({ html, title } = data)

	const localStoragePlayers = 'wikiRacePlayers'
	const localStorageGame = 'wikiRaceGame'

	let mounted = false
	let dataPlayers = $players
	let dataGame = $game
	$: dataPlayers = $players
	$: dataGame = $game

	onMount(() => {
		mounted = true
	})

	$: {
		if (mounted) {
			if (dataPlayers.length === 0 || dataGame.route.length < 2) {
				dataPlayers = JSON.parse(localStorage.getItem(localStoragePlayers) ?? '[]')
				dataGame = JSON.parse(localStorage.getItem(localStorageGame) ?? '{"route":[]}')
			}

			if (dataPlayers.length === 0 || dataGame.route.length < 2) {
				//load from firestore
			}

			if (dataPlayers.length === 0 || dataGame.route.length < 2) {
				if (browser) goto(base)
			} else {
				$players = dataPlayers
				$game = dataGame
				localStorage.setItem(localStoragePlayers, JSON.stringify($players))
				localStorage.setItem(localStorageGame, JSON.stringify($game))
				//set to firestore
			}
		}
	}
</script>

<section>
	<h1 id="firstHeading" class="firstHeading mw-first-heading">
		<span class="mw-page-title-main">{title ?? '[error]: missing title'}</span>
	</h1>
	<LinkParser {html} />
</section>

<!-- <SocketMessages /> -->
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
</style>
