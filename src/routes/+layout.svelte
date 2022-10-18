<script lang="ts">
	import { base } from '$app/paths'
	import Loader from '$lib/UI/Widgets/Loader.svelte'
	import { Toasts } from 'as-toast'
	import { navigating, page } from '$app/stores'
	import { me, game } from '$lib/stores'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { getDocument } from '$lib/firebase/firestore'

	const localStorageMe = 'wikiRaceMe'

	let mounted = false
	let myData: Player & { gameId: string }
	let currentGame: Game

	onMount(() => (mounted = true))

	me.subscribe((MY_DATA) => (myData = MY_DATA))
	game.subscribe((CURRENT_GAME) => (currentGame = CURRENT_GAME))

	$: {
		if (mounted) {
			if (!myData.uid || myData.uid === '') {
				myData = JSON.parse(localStorage.getItem(localStorageMe) ?? '{}')
			}

			if (myData.uid && myData.uid !== '') {
				$me = myData
				localStorage.setItem(localStorageMe, JSON.stringify($me))
			}

			if ((!currentGame.id || currentGame.id === '') && $me.gameId && $me.gameId !== '') {
				getDocument({
					type: 'game',
					id: $me.gameId
				}).then((response) => {
					const data = response.data() as Game

					$game = {
						id: data.id ?? response.id,
						route: data.route,
						state: data.state,
						players: data.players
					}
				})
			}

			if (browser) {
				if (currentGame.state === 'started') {
					const linkHistory = currentGame.players.find((player) => $me.uid === player.uid)?.progress
						.linkHistory

					if (linkHistory && linkHistory.length !== 0) {
						const dest = linkHistory[linkHistory.length - 1].url

						if (!$page.routeId?.includes(dest)) goto(`${base}/${dest}`)
					}
				} else if (currentGame.state === 'countdown') {
					goto(`${base}/countdown`)
				}
			}
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/app.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

{#if $navigating}
	<div>
		<div class="loading-box">
			<Loader />
		</div>
	</div>
{/if}

<Toasts />

<style>
	div {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.loading-box {
		margin: auto;
		height: min-content;
		width: min-content;
		padding: 2rem;
		background: var(--bg);
		border-radius: 0.5rem;
		border: 1px var(--text) solid;
	}
</style>
