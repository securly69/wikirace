<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { me } from '$lib/stores'
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

			goto(href)
		}
	}
</script>

<div bind:this={container} class="container">{@html html}</div>
