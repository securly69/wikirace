<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { players, game, me } from '$lib/stores'
	import CopyToClipboard from '$lib/UI/Widgets/CopyToClipboard.svelte'
	import DataInput from '$lib/UI/Widgets/DataInput.svelte'
	import Icon from '@iconify/svelte'
	import { addToast } from 'as-toast'

	const randomStarterNames = [
		'party_animal',
		'happy_go_lucky',
		'fun_loving',
		'carefree',
		'lighthearted',
		'whimsical',
		'playful',
		'mischievous',
		'impish',
		'jolly',
		'Goofy',
		'Dopey',
		'Grumpy',
		'Bashful',
		'Sleepy',
		'Happy',
		'Sneezy',
		'Doc',
		'Snow White',
		'Cinderella',
		'Sleeping Beauty',
		'Little Red Riding Hood',
		'The Three Little Pigs',
		'The Big Bad Wolf',
		'Goldilocks',
		'The Three Bears',
		'Rapunzel',
		'Hansel and Gretel',
		'Rumpelstiltskin',
		'Jack and the Beanstalk',
		'cutiepie',
		'sugar',
		'cupcake',
		'cutesy',
		'darling',
		'precious',
		'lovebug',
		'sweetie',
		'sugarplum',
		'angel'
	]
	const colors = [
		'#ffda1e',
		'#f2a005',
		'#f24503',
		'#fe9ad2',
		'#9d9bfe',
		'#1f99fd',
		'#7ac6ff',
		'#60dfcd',
		'#62ca9c'
	] as const

	let nameValue = randomStarterNames[Math.floor(Math.random() * randomStarterNames.length)]
	let chosenColor: Color = colors[Math.floor(Math.random() * colors.length)]

	let value: string

	const changeColor = (input: typeof colors[number]) => {
		chosenColor = input
	}

	const save = () => {
		if (!nameValue || nameValue === '') return

		$me = {
			name: nameValue.trim(),
			uid: '',
			color: chosenColor,
			score: 0,
			progress: {
				linkHistory: [],
				linksProgressed: 0,
				backNavs: 0,
				isCriticallyClose: false,
				timesCriticallyClose: 0
			}
		}

		$players = [...$players, $me]
	}
</script>

<p>
	Your name is:
	<span style="color: {chosenColor}">
		{nameValue}
	</span>
</p>

<div class="flex">
	{#each colors as color (color)}
		<div
			class="color"
			style={`background: ${color};`}
			on:click={() => changeColor(color)}
			on:keydown={() => changeColor(color)}
		>
			{#if color === chosenColor}
				<Icon icon="akar-icons:check" color="var(--bg)" />
			{/if}
		</div>
	{/each}
</div>

<DataInput bind:value text="Or choose a name" name="name" id="name" type="name" />

<button
	class="button"
	class:disabled={!nameValue || nameValue === ''}
	on:click={save}
	on:keydown={save}
>
	Save name
</button>

<style>
	.disabled {
		background-color: rgb(159, 180, 199);
		color: rgb(136, 136, 136);
		box-shadow: none !important;
		cursor: not-allowed;
	}

	.flex {
		display: flex;
		gap: 0.75rem;
	}

	.flex > * {
		cursor: pointer;
		width: 1.25rem;
		height: 1.25rem;
	}

	.color {
		overflow: hidden;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
