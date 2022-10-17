<script lang="ts">
	import { game } from '$lib/stores'
	import DataInput from '$lib/UI/Widgets/DataInput.svelte'
	import Icon from '@iconify/svelte'
	import { fly } from 'svelte/transition'

	let value: string
	let shouldShakeInput = false

	let searchList = {}

	// https://en.wikipedia.org/w/api.php?action=parse&format=json&page='
	$: debounce(
		() =>
			fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${value}`)
				.then((resp) => resp.json())
				.then((json) => (searchList = json)),
		500
	)

	let timer: string | number | NodeJS.Timeout | undefined
	const debounce = (fnc: Function, time: number) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fnc()
		}, time)
	}

	$: {
		console.log({ searchList })
	}

	const shakeNo = async () => {
		shouldShakeInput = true

		await new Promise((resolve) => setTimeout(resolve, 820))

		shouldShakeInput = false
	}

	const addRoute = (dest: string) => () => {
		if (!dest || dest === '') {
			shakeNo()
			return
		}

		if ($game.route.includes(dest)) {
			shakeNo()
			return
		}

		$game = { ...$game, route: [...$game.route, dest] }
	}

	const removeFromRoute = (dest: string) => () => {
		const index = $game.route.indexOf(dest)

		if (index === -1) return

		$game.route.splice(index, 1)
		$game = { ...$game, route: [...$game.route] }
	}

	const finish = () => {
		$game = { ...$game, id: 'test', ready: true }
	}
</script>

{#if $game.route.length === 0}
	<p>There are no routes so far.</p>
{:else}
	<div class="numbered-list">
		{#each $game.route as route, index}
			<div in:fly>
				<span>
					{index}. {route}
				</span>

				<div on:click={removeFromRoute(route)}>
					<Icon color="red" icon="akar-icons:cross" />
				</div>
			</div>
		{/each}
	</div>
{/if}

<div class:shake={shouldShakeInput}>
	<DataInput
		bind:value
		text="Choose a next route"
		name="route"
		id="route"
		type="route"
		required
		attempted
	/>
</div>

<button class="button" on:click={addRoute(value)} on:keydown={addRoute(value)}>
	+ Add Route
</button>

<button
	class="button"
	class:disabled={$game.route.length < 2}
	on:click={finish}
	on:keydown={finish}
>
	Finish and start game
</button>

<style>
	.disabled {
		background-color: rgb(159, 180, 199);
		color: rgb(136, 136, 136);
		box-shadow: none !important;
		cursor: not-allowed;
	}

	.numbered-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.numbered-list > * {
		display: flex;
		justify-content: space-between;
	}

	.shake {
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}

	@keyframes shake {
		10%,
		90% {
			translate: -1px 0;
		}

		20%,
		80% {
			translate: 2px 0;
		}

		30%,
		50%,
		70% {
			translate: -4px 0;
		}

		40%,
		60% {
			translate: 4px 0;
		}
	}
</style>
