<script lang="ts">
	import { pipe } from '$lib/fp-ts'
	import { base } from '$app/paths'

	const wikipedia = 'https://en.wikipedia.org/w/api.php?origin=*&action=parse&format=json&page='
	const errorTitle = 'Error'
	const errorHTML = 'Error, no wikipedia page found'

	export let wiki = ''

	let html = '잠시만요~'
	let title = 'Loading...'

	$: {
		fetch(`${wikipedia}${wiki ?? 'Main_page'}`)
			.then((prefilteredData) => prefilteredData.json())
			.then((response) => {
				let parsed = pipe(response, JSON.stringify, JSON.parse)?.parse

				title = parsed?.title ?? errorTitle
				html = parsed?.text['*']?.replaceAll('/wiki/', `${base}/`) ?? errorHTML
			})
	}
</script>

<slot {html} {title} />
