<script lang="ts">
	import { browser } from '$app/environment'
	import { base } from '$app/paths'
	import { updateDocument } from '$lib/firebase/firestore'
	import { game, me } from '$lib/stores'
	import { afterUpdate } from 'svelte'

	export let html: string

	let container: HTMLDivElement

	afterUpdate(() =>
		container
			.querySelectorAll(`a[href*="${base}"]`)
			.forEach((element: Element) => (element.onclick = wikilink))
	)

	const wikilink = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		const href = e.target?.href
		if (browser && href) {
			const progress = $me.progress

			progress.linksProgressed++
			progress.linkHistory.push({ url: href, type: 'url', index: progress.linkHistory.length })

			$me = { ...$me, progress }

			updateDocument({
				type: 'game',
				id: $game.id,
				content: {
					players: $game.players
				}
			})
		}
	}
</script>

<div bind:this={container} class="container">{@html html}</div>

<style>
	:global(a:link),
	:global(a:visited),
	:global(a:active) {
		color: var(--primary);
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}
</style>
