<script lang="ts">
	import { updateDocument, uploadDocument } from '$lib/firebase/firestore'
	import { game, me } from '$lib/stores'
	import DataInput from '$lib/UI/Widgets/DataInput.svelte'
	import Icon from '@iconify/svelte'
	import { fade } from 'svelte/transition'

	let value: string
	let shouldShakeInput = false

	let searchResults: { title: string; pageid: number; snippet: string }[] = []

	$: {
		searchResults = []
		debounce(
			() =>
				!value || value === ''
					? null
					: fetch(
							`https://en.wikipedia.org/w/api.php?&origin=*&action=query&format=json&list=search&srsearch=${value.trim()}`
					  )
							.then((resp) => resp.json())
							.then((json) => (searchResults = json?.query?.search)),
			500
		)
	}

	let timer: string | number | NodeJS.Timeout | undefined
	const debounce = (fnc: Function, time: number) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fnc()
		}, time)
	}

	const shakeNo = async () => {
		shouldShakeInput = true

		await new Promise((resolve) => setTimeout(resolve, 820))

		shouldShakeInput = false
	}

	const addRoute = (index: number) => () => {
		const dest = searchResults[index].title

		if (!dest || dest === '') {
			shakeNo()
			return
		}

		if ($game.route.includes(dest)) {
			shakeNo()
			return
		}

		$game = { ...$game, route: [...$game.route, dest] }
		searchResults = []
	}

	const removeFromRoute = (index: number) => () => {
		$game.route.splice(index, 1)
		$game = { ...$game, route: [...$game.route] }
	}

	const finish = () => {
		if ($game.route.length < 2) return

		$game = {
			...$game,
			route: $game.route.map((r) => r.replaceAll(' ', '_')),
			id: '',
			state: 'waiting',
			players: [
				{
					...$me,
					progress: {
						linkHistory: [],
						linksProgressed: 0,
						backNavs: 0,
						isCriticallyClose: false,
						timesCriticallyClose: 0
					}
				}
			]
		}

		uploadDocument({
			type: 'game',
			content: $game
		}).then((response) => {
			const id = response?.id ?? ''

			$game = { ...$game, id }
			$me = { ...$me, gameId: id }

			updateDocument({
				type: 'player',
				id: $me.uid,
				content: $me
			})
		})
	}
</script>

{#if $game.route.length === 0}
	<p>There are no routes so far.</p>
{:else}
	<div class="numbered-list">
		{#each $game.route as route, index}
			<div in:fade>
				<span>
					{index + 1}. {route.replaceAll('_', ' ')}
				</span>

				<div on:click={removeFromRoute(index)}>
					<Icon color="red" icon="akar-icons:cross" />
				</div>
			</div>
		{/each}
	</div>
{/if}

<div class:shake={shouldShakeInput}>
	<DataInput
		bind:value
		text="Choose the next route"
		name="route"
		id="route"
		type="route"
		required
		attempted
	/>
</div>

<div class="search-results" class:hidden={searchResults.length === 0}>
	{#each searchResults as result, index}
		<div on:click={addRoute(index)} on:keydown={addRoute(index)} in:fade>
			{result.title}
		</div>
	{/each}
</div>

<button
	class="button"
	class:disabled={$game.route.length < 2}
	on:click={finish}
	on:keydown={finish}
>
	Finish Selection
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

	.search-results {
		translate: 0 -2rem;
		display: flex;
		flex-direction: column;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		border-bottom: 1px solid var(--primary);
		border-left: 1px solid var(--primary);
		border-right: 1px solid var(--primary);
		overflow: hidden;
	}
	.search-results.hidden {
		display: none;
	}
	.search-results > div {
		border-top: 1px solid var(--primary);
		background-color: white;
		cursor: pointer;
		padding: 0.5rem 1rem;
	}
	.search-results > div:hover {
		background-color: var(--primary);
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
