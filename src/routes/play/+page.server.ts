import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { pipe } from '$lib/fp-ts'

const wiki = `https://en.wikipedia.org/w/api.php?action=parse&page=Pet_door&format=json`

export const load: PageServerLoad = async ({ params }) => {
	const prefilteredData = await fetch(wiki)

	let html = pipe(prefilteredData.body, JSON.stringify, JSON.parse)

	if (typeof html === 'string') {
		throw error(404, 'wikipedia page not found')
	}

	return { html }
}
