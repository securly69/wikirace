<script lang="ts">
	import { logs, config, controlsHelpers } from '$lib/stores'

	const { master, controls, brain } = config

	const storeReference = {
		master,
		brain,
		controls
	}
	const valueReference = {
		master: $master,
		brain: $brain,
		controls: $controls
	}

	$: configSections = Object.keys(valueReference) as [keyof CONFIG.Helper]

	const configValues = <T extends keyof CONFIG.Helper>(where: T) =>
		Object.keys(valueReference[where]) as unknown as [keyof CONFIG.Helper[T]]

	const update =
		<T extends keyof CONFIG.Helper, K extends keyof CONFIG.Helper[T]>(where: T, key: K) =>
		(e: InputEvent) => {
			const target = e.target as HTMLInputElement
			const type = controlsHelpers[where][key].where
			const what =
				type === 'number'
					? Number(target.value)
					: type === 'checkbox'
					? target.checked
					: target.value

			storeReference[where].update((v) => ({
				...v,
				[key]: what
			}))
		}
</script>

<section>
	{#each Object.keys($logs) as key}
		<div>
			<p>
				{key}:
			</p>
			<p>
				{$logs[key]}
			</p>
		</div>
	{/each}
</section>

<section>
	{#each configSections as where}
		<p class="header">{where}</p>
		{#each configValues(where) as key}
			{#if controlsHelpers[where][key]?.where === where}
				<div>
					<p>
						{key}:
					</p>
					<input
						value={valueReference[where][key]}
						checked={controlsHelpers[where][key].type == 'checkbox'
							? valueReference[where][key]
							: null}
						on:change={update(where, key)}
						{...controlsHelpers[where][key]}
					/>
				</div>
			{/if}
		{/each}
		<hr />
	{/each}
</section>

<style>
	section {
		position: absolute;
		left: 0;
		margin: 1rem 2rem;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: rgba(255, 255, 255, 0.762);
		border-radius: 1rem;
		box-shadow: 0 2px 18px 2px rgba(0, 0, 0, 0.348);
		max-width: calc(50% - 7rem);
		max-height: 70%;
		overflow-y: auto;
	}

	section:nth-child(2n + 1) {
		left: unset;
		right: 0;
		bottom: 0;
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
	}

	.header {
		opacity: 0.6;
	}

	input {
		width: 3rem;
	}

	hr {
		border-bottom: grey 1px solid;
		width: 60%;
		opacity: 0.5;
	}
</style>
