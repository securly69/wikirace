<script lang="ts">
	import { game } from '$lib/stores'
	import RouteViewer from '$lib/UI/Widgets/RouteViewer.svelte'
	import ScoreHeader from '$lib/UI/Widgets/ScoreHeader.svelte'
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="//en.wikipedia.org/w/load.php?lang=en&amp;modules=ext.cite.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cjquery.makeCollapsible.styles%7Cskins.vector.styles.legacy%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"
	/>
	<link
		rel="stylesheet"
		href="//en.wikipedia.org/w/load.php?lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=vector"
	/>
</svelte:head>

<div class="no-scroll">
	<RouteViewer route={$game.route} />

	<ScoreHeader />

	<div class="content">
		<slot />
	</div>
</div>

<style>
	.no-scroll {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		overflow: hidden;
	}

	.content {
		overflow: auto;
	}
</style>
