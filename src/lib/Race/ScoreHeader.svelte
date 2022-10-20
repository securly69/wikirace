<script lang="ts">
	import { fade } from 'svelte/transition'
	import { game } from '$lib/stores'
	import PlayerScoreViewer from './PlayerScoreViewer.svelte'
	import FabMenu from '../UI/Widgets/FABMenu.svelte'
	import RouteViewer from './RouteViewer.svelte'
	import BackButton from '$lib/UI/BackButton.svelte'
</script>

<section in:fade out:fade>
	<div class="back">
		<BackButton />
	</div>

	<div class="players">
		{#each $game.players.sort((a, b) => a.name.localeCompare(b.name)) as player (player.uid)}
			<PlayerScoreViewer {player} />

			<div class="overlay" />
		{/each}
	</div>

	<RouteViewer route={$game.route} />

	<FabMenu />
</section>

<style>
	section {
		top: 0;
		left: 0;
		right: 0;
		border-bottom: 1px solid #aaa;
		box-shadow: 0px 0px 25px 40px #aaa3;
		background-color: white;
		padding: 1rem 7rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.back {
		position: absolute;
		top: 0.75rem;
		left: 1rem;
		z-index: 1000;
	}

	.players {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transition: max-height 0.7s ease-out;
		max-height: 30px;
		overflow-y: hidden;
	}

	.players .overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(180deg, transparent, #0002);
		transition: opacity 0.3s ease-out;
	}

	.players:hover {
		max-height: 8rem;
	}

	.players:hover .overlay {
		opacity: 0;
	}
</style>
