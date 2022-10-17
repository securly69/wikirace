<script lang="ts">
	import { base } from '$app/paths'

	import BackButton from '$lib/UI/BackButton.svelte'

	export let backBtn: boolean = true
	export let logoLink: string = '/'

	const logo = `${base}/logo/logo_main.png`
</script>

<div class="flex">
	{#if backBtn}
		<BackButton />
	{/if}
	<a href={base + logoLink}>
		<h2>WikiRace</h2>
		<!-- <img src={logo} alt="HAJA" /> -->
	</a>
	<div class="center" />
</div>

<style>
	.flex {
		display: flex;
		flex-direction: horizontal;
	}
	a {
		color: #3796e4;
		font-size: 1.1rem;
		text-decoration: none;
		max-width: 120px;
		cursor: pointer;
	}
	.center {
		flex: 1;
	}
</style>
