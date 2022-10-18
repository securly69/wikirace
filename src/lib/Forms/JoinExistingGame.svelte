<script lang="ts">
	import { game, me } from '$lib/stores'
	import { updateDocument, updateDocumentArray } from '$lib/firebase/firestore'
	import RouteViewer from '$lib/Race/RouteViewer.svelte'
	import PlayerScoreViewer from '$lib/Race/PlayerScoreViewer.svelte'
	import ShareLink from '$lib/UI/Widgets/ShareLink.svelte'
	import { onMount } from 'svelte'

	export let gameId: string

	onMount(() => {
		if ($me.gameId !== gameId && $me.uid && $me.uid !== '') {
			$me = {
				...$me,
				gameId
			}

			updateDocumentArray(
				{
					type: 'game',
					id: gameId
				},
				'players',
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
			)
		}
	})
</script>

<section>
	<RouteViewer route={$game.route} />

	{#each $game.players as player (player.uid)}
		<div>
			<PlayerScoreViewer {player} />
		</div>
	{/each}

	<ShareLink />

	<p>Waiting for host to start game</p>

	<p>
		{$game?.id}
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
