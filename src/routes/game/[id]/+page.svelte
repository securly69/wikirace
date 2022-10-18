<script lang="ts">
	import type { PageData } from './$types'
	import OnboardingFlow from '$lib/Forms/OnboardingFlow.svelte'

	export let data: PageData

	let { gameId } = data
	$: ({ gameId } = data)
</script>

<OnboardingFlow {gameId} />
