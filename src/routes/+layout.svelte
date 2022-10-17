<script lang="ts">
	import { base } from '$app/paths'
	import Loader from '$lib/UI/Widgets/Loader.svelte'
	import { Toasts } from 'as-toast'
	import { navigating } from '$app/stores'
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
