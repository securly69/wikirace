<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import Burger from '$lib/UI/Widgets/Burger.svelte'
	import GlassyButton from '$lib/UI/Widgets/GlassyButton.svelte'
	import { fade, fly } from 'svelte/transition'
	import { base } from '$app/paths'
	import { page } from '$app/stores'

	const baseButtons = [
		{
			text: 'Go back to introduction',
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

	$: Controls = {
		add: {
			text: 'View with controls',
			action: () => {
				if (browser) goto(`${base}/${$page.routeId}/controls`)
			}
		},
		remove: {
			text: 'Turn off controls',
			action: () => {
				if (browser) goto(`${base}/${$page.routeId?.replace('/controls', '')}`)
			}
		}
	}

	$: RenderStyle = {
		twoDim: {
			text: 'Show in TopDown simple style',
			action: () => {
				if (browser) goto(`${base}/${$page.routeId?.replace('3d', '2d')}`)
			}
		},
		threeDim: {
			text: 'Render in 3D',
			action: () => {
				if (browser) goto(`${base}/${$page.routeId?.replace('2d', '3d')}`)
			}
		}
	}

	$: {
		isClosed
		buttons = baseButtons.slice()
		if ($page.routeId?.includes('3d')) {
			buttons.push(RenderStyle.twoDim)
		} else {
			buttons.push(RenderStyle.threeDim)
		}
		if ($page.routeId?.includes('controls')) {
			buttons.push(Controls.remove)
		} else {
			buttons.push(Controls.add)
		}
	}

	const perform = (action: VoidFunction) => {
		action()
		isClosed = true
	}

	const toggle = () => (isClosed = !isClosed)
</script>

{#if $page.routeId != ''}
	<section in:fade out:fade>
		<div class="burger">
			<GlassyButton callback={toggle}>
				<Burger open={!isClosed} />
			</GlassyButton>
		</div>

		{#if !isClosed}
			{#each buttons as button, index}
				<div
					in:fly={{ y: -100, delay: 40 * index }}
					out:fly={{ y: -100, x: 100, delay: 20 * index }}
				>
					<GlassyButton callback={() => perform(button.action)}>{button.text}</GlassyButton>
				</div>
			{/each}
		{/if}
	</section>
{/if}

<style>
	section {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-end;
	}

	.burger {
		z-index: 100;
	}
</style>
