import { updateDocumentArray } from '$lib/firebase/firestore'
import { location } from '$lib/stores'
import { defaultProgressValue } from './defaults'

export const navigate = (game: Game, me: Player & { gameId: string }, dest: string) => {
	const players = game.players
	const myself = players.find((player) => me.uid === player.uid)

	if (!myself) return

	updateDocumentArray(
		{
			type: 'game',
			id: game.id
		},
		'players',
		myself,
		true
	)

	const progress = myself.progress ?? defaultProgressValue

	progress.linksProgressed++
	progress.linkHistory.push({ url: dest, type: 'url', index: progress.linkHistory.length })

	updateDocumentArray(
		{
			type: 'game',
			id: game.id
		},
		'players',
		{ ...myself, progress }
	)

	location.set(dest)
}
