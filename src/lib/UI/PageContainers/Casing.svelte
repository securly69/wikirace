<script lang="ts">
	import Header from '$lib/UI/Header.svelte'

	export let backBtn: boolean = true
	export let logoLink: string = '/'
</script>

<section>
	<div class="container">
		<Header {backBtn} {logoLink} />
		<div class="padding-bottom" />
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.container {
		width: 100%;
		max-width: 900px;
		padding: 32px 32px 64px 32px;
		overflow: hidden;
		word-wrap: break-word;
	}
	.padding-bottom {
		padding-bottom: var(--default-padding);
	}
</style>
