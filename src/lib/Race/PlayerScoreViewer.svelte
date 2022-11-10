<script lang="ts">
	import { game } from '$lib/stores'
	import Icon from '@iconify/svelte'

	export let player: Player & { progress: Progress }

	const linkTypeColor = {
		url: 'var(--primary)',
		back: 'var(--error)'
	}
</script>

<div class="player">
	<p class="name" style="color: {player.color ?? 'var(--text)'};">
		{player.name}
	</p>
	<div class="progress">
		{#each player.progress.linkHistory as link}
			<div
				class="counter"
				style="
					background-color: {$game.route.includes(link.url) ? 'var(--secondary)' : linkTypeColor[link.type]};
					color: var(--bg);
				"
			>
				<Icon icon={link.type === 'url' ? 'akar-icons:arrow-right' : 'bi:arrow-90deg-left'} />
			</div>
		{/each}
	</div>

	<div class="score">
		{player.score} win{player.score !== 1 ? 's' : ''}
	</div>
</div>

<style>
	.player {
		display: flex;
		gap: 1rem;
		user-select: none;
		min-height: 2rem;
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.score {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 6rem;
		margin-left: auto;
		color: white;
		font-weight: bold;
		background-color: green;
		border-radius: 0.5rem;
	}
</style>
