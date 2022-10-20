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

	const type = progress.linkHistory.findIndex((where) => where.url === dest) === -1 ? 'url' : 'back'

	progress.linksProgressed++
	progress.linkHistory.push({ url: dest, type, index: progress.linkHistory.length })

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
