<script lang="ts">
	import type { PageData } from './$types'
	import LinkParser from '$lib/Race/LinkParser.svelte'
	import { onMount } from 'svelte'
	import { game, me } from '$lib/stores'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'

	export let data: PageData

	let { html, title } = data
	$: ({ html, title } = data)

	onMount(() => {
		if (browser && $me.uid == null) {
			goto(base)
			return
		}

		if (
			$page.url.pathname.substring(base.length + 1).replaceAll('/', '') ===
			$game.route[$game.route.length - 1]
		) {
			// call it a win state
		}
	})
</script>

<section>
	<h1 id="firstHeading" class="firstHeading mw-first-heading">
		<span class="mw-page-title-main">{title ?? '[error]: missing title'}</span>
	</h1>
	<LinkParser {html} />
</section>

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
