<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import Burger from '$lib/UI/Widgets/Burger.svelte'
	import GlassyButton from '$lib/UI/Widgets/GlassyButton.svelte'
	import { fly } from 'svelte/transition'
	import { base } from '$app/paths'
	import { game } from '$lib/stores'

	const baseButtons = [
		{
			text: 'Go back main menu',
			action: () => {
				if (browser) goto(base)
			}
		},
		{
			text: 'See more works by me',
			action: () => {
				if (browser) goto('https://elijahstorm.github.io/')
			}
		}
	]

	let isClosed = true
	let buttons = baseButtons

	$: {
		isClosed
		buttons = baseButtons.slice()
	}

	const perform = (action: VoidFunction) => {
		action()
		isClosed = true
	}

	const toggle = () => (isClosed = !isClosed)
</script>

<div class="nav">
	<div class="burger">
		<GlassyButton callback={toggle}>
			<Burger open={!isClosed} />
		</GlassyButton>
	</div>

	{#if !isClosed}
		{#each buttons as button, index}
			<div in:fly={{ y: -100, delay: 40 * index }} out:fly={{ y: -100, x: 100, delay: 20 * index }}>
				<GlassyButton callback={() => perform(button.action)}>{button.text}</GlassyButton>
			</div>
		{/each}
	{/if}
</div>

<style>
	.nav {
		position: absolute;
		top: 0.75rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-end;
		z-index: 1000;
	}

	.burger {
		z-index: 100;
	}
</style>
