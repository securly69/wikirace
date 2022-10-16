<script lang="ts">
	import { base } from '$app/paths'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { useGltf } from '@threlte/extras'
	import { derived } from 'svelte/store'
	import type { CityRoadObjects } from './objects'
	import { Mesh, type Position, type Rotation } from '@threlte/core'
	import { AutoColliders } from '@threlte/rapier'
	import Ground from '../Car/Ground.svelte'
	import { config } from '$lib/stores'

	const { master, simulation } = config

	let generatedMap: MapGeneration
	$: generatedMap = $simulation.world.generatedMap
	let tileAmount: number
	$: tileAmount = $master.gridSize

	type Components = typeof CityRoadObjects[number]
	const { gltf } = useGltf<Components, 'Material_MR'>(`${base}/models/roads/roads.gltf`)

	const Roads = derived(gltf, (gltf) => (!gltf ? null : gltf.nodes))

	const TILE_SIZE = 16
	const LOOP_AMOUNT = 3
	const CITY_LOOP = new Array(LOOP_AMOUNT ** 2).fill(0)

	const usefulRoads = [
		'sidewalk_x8',
		'road_section_dead_end',
		'road_section_x8',
		'road_section_turn_tight',
		'road_section_t_section',
		'road_section_cross'
	] as Components[]

	let tiles: ({
		object: Mesh
		position: Position
		rotation: Rotation
	} | null)[] = []
	$: tiles = generatedMap.map.map((render, i) =>
		$Roads == null
			? null
			: render.type == 0
			? null
			: {
					object: $Roads[usefulRoads[render.type]] as unknown as Mesh,
					position: {
						x: (i % tileAmount) * TILE_SIZE,
						z: Math.floor(i / tileAmount) * TILE_SIZE,
						y: 0
					},
					rotation: {
						x: 90 * DEG2RAD,
						z: (render.rotate * 90 + (render.type == 1 ? 270 : render.type == 2 ? 90 : 0)) * DEG2RAD
					}
			  }
	)

	const moveToLocation = (position: Position, index: number) => ({
		x: (position?.x ?? 0) + ((index % LOOP_AMOUNT) - 1) * tileAmount * TILE_SIZE,
		z: (position?.z ?? 0) + (Math.floor(index / LOOP_AMOUNT) - 1) * tileAmount * TILE_SIZE,
		y: position.y
	})
</script>

<Ground />

{#if $Roads}
	{#each CITY_LOOP as loop, index}
		{#each tiles as city}
			{#if city}
				<AutoColliders shape={'trimesh'}>
					<Mesh
						castShadow
						receiveShadow
						position={moveToLocation(city.position, index)}
						rotation={city.rotation}
						geometry={city.object.geometry}
						material={city.object.material}
						scale={city.object.scale}
					/>
				</AutoColliders>
			{/if}
		{/each}
	{/each}

	<slot />
{/if}
