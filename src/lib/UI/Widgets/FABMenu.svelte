<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import Burger from '$lib/UI/Widgets/Burger.svelte'
	import GlassyButton from '$lib/UI/Widgets/GlassyButton.svelte'
	import { fly } from 'svelte/transition'
	import { base } from '$app/paths'
	import { players } from '$lib/stores'

	const baseButtons = [
		{
			text: 'Add new player',
			action: () => {
				$players = [
					...$players,
					{
						uid: '325',
						name: 'player hi',
						color: '#f00',
						score: 5,
						progress: {
							linkHistory: [
								{
									type: 'url',
									url: 'there',
									index: 0
								},
								{
									type: 'url',
									url: 'there2',
									index: 1
								},
								{
									type: 'back',
									url: 'there',
									index: 2
								},
								{
									type: 'url',
									url: 'there3',
									index: 3
								},
								{
									type: 'url',
									url: 'there4',
									index: 4
								},
								{
									type: 'back',
									url: 'there3',
									index: 5
								},
								{
									type: 'url',
									url: 'there5',
									index: 6
								}
							],
							linksProgressed: 7,
							backNavs: 2,
							isCriticallyClose: false,
							timesCriticallyClose: 2
						}
					}
				]
			}
		},
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
	}

	.burger {
		z-index: 100;
	}
</style>
