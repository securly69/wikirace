<script lang="ts">
	import { game, me } from '$lib/stores'
	import { updateDocument } from '$lib/firebase/firestore'
	import RouteViewer from '$lib/UI/Widgets/RouteViewer.svelte'
	import PlayerScoreViewer from '$lib/UI/Widgets/PlayerScoreViewer.svelte'
	import ShareLink from '$lib/UI/Widgets/ShareLink.svelte'

	export let gameData: Game

	let myData: Player & { gameId: string }
	me.subscribe((MY_DATA) => (myData = MY_DATA))

	$: {
		if (
			myData.uid &&
			myData.uid !== '' &&
			gameData &&
			gameData.players.find((player) => player.uid === myData.uid) === null
		) {
			console.log('where here')

			$game = {
				...gameData,
				players: [
					...gameData.players,
					{
						...myData,
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

			updateDocument({
				type: 'game',
				id: $game.id,
				content: $game
			})
		}
	}
</script>

<div class="maintain-position">
	<section>
		<RouteViewer route={gameData.route} />

		{#each gameData.players as player (player)}
			<div>
				<PlayerScoreViewer {player} />
			</div>
		{/each}

		<ShareLink />

		<p>Waiting for host to start game</p>

		<p>
			{gameData?.id}
		</p>
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
