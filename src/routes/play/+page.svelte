<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	let { html } = data
	$: ({ html } = data)
</script>

{JSON.stringify(html)}
