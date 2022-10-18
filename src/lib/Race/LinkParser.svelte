<script lang="ts">
	import { base } from '$app/paths'
	import { game, me } from '$lib/stores'
	import { afterUpdate } from 'svelte'
	import { navigate } from './navigation'

	export let html: string

	let container: HTMLDivElement

	afterUpdate(() =>
		container
			.querySelectorAll(`a[href*="${base}"]`)
			.forEach((element: any) => (element.onclick = wikilink))
	)

	const wikilink = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		const here = e.target?.href as string
		const href = here.substring(here.indexOf(base) + base.length + 1)

		navigate($game, $me, href)
	}
</script>

<div bind:this={container} class="container">{@html html}</div>

<style>
	:global(.container a:link),
	:global(.container a:visited),
	:global(.container a:active) {
		color: var(--primary) !important;
		text-decoration: none;
	}

	:global(.container a:hover) {
		color: var(--primary) !important;
		text-decoration: underline;
	}
</style>
