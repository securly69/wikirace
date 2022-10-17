<script lang="ts">
	import { players } from '$lib/stores'

	export let player: Player

	const add = () => {
		player.progress.linkHistory.push({
			type: 'url',
			url: 'another one',
			index: player.progress.linkHistory.length
		})

		$players = [...$players]
	}
</script>

<div class="player" on:click={add}>
	<p class="name" style="color: {player.color ?? 'var(--text)'};">
		{player.name}
	</p>
	<div class="progress">
		{#each player.progress.linkHistory as link, index}
			<div
				class="counter"
				style="background-color: {link.type === 'url' ? 'rgb(0 225 255)' : 'rgb(225 0 0)'} "
			>
				&nbsp;
			</div>
		{/each}
	</div>

	<div class="score">
		{player.score}
	</div>
</div>

<style>
	.player {
		display: flex;
		gap: 1rem;
		user-select: none;
		min-height: 2rem;
		max-height: 2rem;
		align-items: stretch;
	}

	.name {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.progress {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.5rem;
	}

	.counter {
		flex: 1;
		max-width: 1.5rem;
		min-width: 0.5rem;
		background-color: rgb(0, 225, 255);
		border: 1px solid black;
		border-radius: 0.25rem;
	}

	.score {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 6rem;
		margin-left: auto;
		border: 1px solid green;
		border-radius: 0.5rem;
	}
</style>
