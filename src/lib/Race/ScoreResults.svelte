<script lang="ts">
	import { D } from '$lib/fp-ts'
	import { game } from '$lib/stores'

	export let player: Player & { progress: Progress }

	let show = false

	const viewHistory = () => {
		show = !show
	}
</script>

<section>
	<p class="name" style="color: {player.color ?? 'var(--text)'};">
		{player.name}
	</p>
	<button class="button" on:click={viewHistory} on:keydown={viewHistory}>
		{show ? 'Hide' : 'View History'}
	</button>
	<div class="history" class:show>
		{#each player.progress.linkHistory as link, index (link)}
			<div>
				{index}:
				<span
					class:link={true}
					class:back={link.type === 'back'}
					class:destination={$game.route.includes(link.url)}
				>
					/{link.url}
				</span>
			</div>
		{/each}
	</div>
	<div class="stat-name">Links Clicked</div>
	<div class="stat">
		{player.progress.linksProgressed}
	</div>
	<div class="stat-name">Times Pressed Back</div>
	<div class="stat">
		{player.progress.backNavs}
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 1rem;
		margin: 1rem 0;
	}

	.history {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: flex-start;
		align-items: flex-start;
		grid-column: span 2;
		max-height: 0;
		transition: all 0.3s ease;
		overflow-y: hidden;
		font-size: 0.8rem;
		padding-left: 2rem;
	}
	.history.show {
		max-height: 10rem;
		overflow-y: auto;
	}
	.history .link {
		color: var(--primary);
	}
	.history .destination {
		color: var(--secondary);
	}
	.history .back {
		color: var(--error);
	}

	.name,
	.stat-name {
		justify-self: flex-start;
	}

	.stat {
		justify-self: flex-end;
	}
</style>
