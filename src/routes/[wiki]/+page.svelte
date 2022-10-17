<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	let { html, title, pageid, revid, categories, links, parsewarnings } = data
	$: ({ html, title, pageid, revid, categories, links, parsewarnings } = data)
</script>

<section>
	<h1 id="firstHeading" class="firstHeading mw-first-heading">
		<span class="mw-page-title-main">{title ?? '[error]: missing title'}</span>
	</h1>
	{@html html}
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
