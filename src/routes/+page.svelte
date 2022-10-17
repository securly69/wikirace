<script lang="ts">
	import CreateUser from '$lib/Forms/CreateUser.svelte'
	import GameStats from '$lib/Forms/GameStats.svelte'
	import PlayersAdd from '$lib/Forms/PlayersAdd.svelte'
	import { game, players } from '$lib/stores'
	import Casing from '$lib/UI/PageContainers/Casing.svelte'
	import FallbackImage from '$lib/UI/Widgets/FallbackImage.svelte'
	import { fly } from 'svelte/transition'
</script>

<Casing backBtn={false}>
	<div class="homepage">
		<div class="login">
			<div class="carousel">
				{#if $players.length === 0}
					<div class="maintain-position" in:fly={{ x: 500 }} out:fly={{ x: -500 }}>
						<CreateUser />
					</div>
				{:else if !$game.ready}
					<div class="maintain-position" in:fly={{ x: 500 }} out:fly={{ x: -500 }}>
						<GameStats />
					</div>
				{:else}
					<div class="maintain-position" in:fly={{ x: 500 }} out:fly={{ x: -500 }}>
						<PlayersAdd />
					</div>
				{/if}
			</div>
		</div>

		<FallbackImage
			src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/2560px-Wikipedia-logo-v2.svg.png"
			alt="wikipedia logo"
		/>
	</div>
</Casing>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
	}

	.homepage {
		display: flex;
		flex-wrap: wrap;
		gap: 5rem 2rem;
	}

	:global(.homepage > *) {
		flex: 1;
		min-width: 300px;
	}

	.login,
	.maintain-position {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.carousel {
		position: relative;
		display: flex;
		max-width: 100%;
		overflow-x: clip;
	}

	.carousel > * {
		flex: 1;
		min-width: 100%;
		padding-bottom: 3rem;
	}

	.maintain-position {
		position: absolute;
		background: linear-gradient(0, transparent, var(--bg), var(--bg));
	}
</style>
