import type { PageServerLoad } from './$types'
import { error, redirect } from '@sveltejs/kit'
import { base } from '$app/paths'
import { getDocument } from '$lib/firebase/firestore'

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params

	if (!id) {
		throw redirect(307, base)
	}

	const data = (
		await getDocument({
			type: 'game',
			id
		})
	).data() as unknown as Game

	if (!data) {
		error(404, 'game cannot be found')
	}

	const gameData = {
		route: data.route,
		players: data.players,
		state: data.state,
		id
	}

	return { gameData }
}
