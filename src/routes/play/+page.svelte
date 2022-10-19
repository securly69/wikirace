<script lang="ts">
	import LinkParser from '$lib/Race/LinkParser.svelte'
	import { onMount } from 'svelte'
	import { game, location, me } from '$lib/stores'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { browser } from '$app/environment'
	import GameShowWikiPage from '$lib/NoBackendFix/GameShowWikiPage.svelte'

	$: {
		if ($location === $game.route[$game.route.length - 1]) {
			// todo: call it a win state
		}
	}

	onMount(() => {
		if (browser && $me.uid === null) {
			goto(base)
			return
		}
	})
</script>

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
</style>
