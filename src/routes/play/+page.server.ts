import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { pipe } from '$lib/fp-ts'
import { base } from '$app/paths'

const wiki = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page='

export const load: PageServerLoad = async ({ params }) => {
	const prefilteredData = await fetch(`${wiki}${params?.wiki ?? 'Main_page'}`)

	let html = pipe(await prefilteredData.json(), JSON.stringify, JSON.parse)
	let parsed = html?.parse

	const { title, pageid, revid, categories, links, parsewarnings } = parsed
	html = parsed?.text['*']?.replaceAll('/wiki/', `${base}/`)

	// todo:
	// it would be interesting if we logged `parsewarnings`
	// and scraped `links` for information / goal progress

	if (!html) {
		throw error(404, 'wikipedia page not found')
	}

	return { html, title, pageid, revid, categories, links, parsewarnings }
}
