<script lang="ts">
	import { fade } from 'svelte/transition'
	import { game } from '$lib/stores'
	import PlayerScoreViewer from './PlayerScoreViewer.svelte'
	import FabMenu from '../UI/Widgets/FABMenu.svelte'
	import RouteViewer from './RouteViewer.svelte'
</script>

<section in:fade out:fade>
	<div class="players">
		{#each $game.players as player (player.uid)}
			<PlayerScoreViewer {player} />
		{/each}

		<RouteViewer route={$game.route} />
	</div>

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
	}

	.players {
		display: flex;
		flex-direction: column;
		margin: 1rem 7rem;
		gap: 1rem;
	}
</style>
