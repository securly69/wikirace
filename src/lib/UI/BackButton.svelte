<script lang="ts">
	import { navigate } from '$lib/Race/navigation'
	import { game, me } from '$lib/stores'
	import Icon from '@iconify/svelte'

	const back = () => {
		const myself = $game.players.find((player) => $me.uid === player.uid)

		if (myself == null || myself.progress.linkHistory.length < 2) return

		const previous = myself.progress.linkHistory[myself.progress.linkHistory.length - 2].url

		navigate($game, $me, previous)
	}
</script>

<div class="center" on:click={back}>
	<Icon icon={'akar-icons:chevron-left'} color="var(--primary)" height={34} />
</div>

<style>
	.center {
		margin: auto;
		padding-right: var(--default-padding);
		cursor: pointer;
	}
</style>
