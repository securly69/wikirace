<script lang="ts">
	import { updateDocument } from '$lib/firebase/firestore'
	import { game, me } from '$lib/stores'
	import { onMount } from 'svelte'

	let time = 5

	onMount(() => {
		countdown()
	})

	const countdown = async () => {
		if (time < 0) {
			const updatedPlayerList = $game.players
			const myId = updatedPlayerList.findIndex((player) => $me.uid === player.uid)

			if (myId === -1) {
				console.error('cannot find your user')
				return
			}

			updatedPlayerList[myId].progress = {
				linksProgressed: 0,
				backNavs: 0,
				isCriticallyClose: false,
				timesCriticallyClose: 0,
				linkHistory: [
					{
						type: 'url',
						url: $game.route[0],
						index: 0
					}
				]
			}

			$game = {
				...$game,
				state: 'started',
				players: updatedPlayerList
			}

			updateDocument({
				type: 'game',
				id: $game.id,
				content: $game
			})

			return
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))

		time--
		countdown()
	}
</script>

<section>
	{time <= 0 ? 'GO!' : time}
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 6rem;
		font-weight: bold;
		font-family: Roboto, sans-serif;
		color: var(--primary);
	}
</style>
