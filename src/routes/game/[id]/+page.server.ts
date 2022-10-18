import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import { base } from '$app/paths'

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params

	if (!id) {
		throw redirect(307, base)
	}

	return { gameId: id }
}
