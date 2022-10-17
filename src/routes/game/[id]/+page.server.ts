import type { PageServerLoad } from './$types'
import { error, redirect } from '@sveltejs/kit'
import { pipe } from '$lib/fp-ts'
import { base } from '$app/paths'

export const load: PageServerLoad = async ({ params, locals }) => {
	const game = await true // get it

	if (!game) {
		throw redirect(404, base)
	}

	return { game }
}
