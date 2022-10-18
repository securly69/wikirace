<script lang="ts">
	import type { PageData } from './$types'
	import OnboardingFlow from '$lib/Forms/OnboardingFlow.svelte'

	export let data: PageData

	let { gameData } = data
	$: ({ gameData } = data)
</script>

<OnboardingFlow {gameData} />
