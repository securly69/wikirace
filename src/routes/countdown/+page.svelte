<script lang="ts">
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { game } from '$lib/stores'
	import { onMount } from 'svelte'

	let time = 5

	onMount(() => {
		countdown()
	})

	const countdown = async () => {
		if (time < 0) {
			goto(`${base}/${$game.route[0]}`)
			return
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))

		time--
		countdown()
	}
</script>

<section>
	{time <= 0 ? 'GO!' : time}
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 6rem;
		font-weight: bold;
		font-family: Roboto, sans-serif;
		width: 100vw;
		height: 100vh;
		color: var(--primary);
	}
</style>
