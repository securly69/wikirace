<script lang="ts" context="module">
	import { derived, writable, type Readable, type Writable } from 'svelte/store'
	type CarContext = {
		speed: Writable<number>
	}

	export const useCar = () => {
		return getContext<CarContext>('threlte-car-context')
	}
</script>

<script lang="ts">
	import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat'
	import { Group, useFrame, type Position, type Rotation } from '@threlte/core'
	import { HTML, useGltf, GLTF } from '@threlte/extras'
	import { Collider, RigidBody, useRapier } from '@threlte/rapier'
	import { getContext, setContext } from 'svelte'
	import { Vector3, Mesh as ThreeMesh } from 'three'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Axle from './Axle.svelte'
	import { onDestroy } from 'svelte'
	import { base } from '$app/paths'

	export let position: Position | undefined = undefined
	export let rotation: Rotation | undefined = undefined

	const carContext = {
		speed: writable(0)
	}

	const { speed } = carContext

	setContext<typeof carContext>('threlte-car-context', carContext)

	const { world } = useRapier()
	const v3 = new Vector3()

	const carComponents = [
		'car006',
		'car006_w001',
		'car006_w002',
		'car006_w003',
		'car006_w004'
	] as const
	type Components = typeof carComponents[number]
	const { gltf } = useGltf<Components, 'Material_MR'>(`${base}/models/.old.city/glb/car-6.glb`)
	const [carModel, wheelsFL, wheelsFR, wheelsBL, wheelsBR] = carComponents.map((name) =>
		derived(gltf, (gltf) => {
			if (!gltf || !gltf.nodes[name]) return
			return gltf.nodes[name] as ThreeMesh
		})
	)


	const initialIterations = {
		maxStabilizationIterations: world.maxStabilizationIterations,
		maxVelocityFrictionIterations: world.maxVelocityFrictionIterations,
		maxVelocityIterations: world.maxVelocityIterations
	}

	world.maxStabilizationIterations *= 100
	world.maxVelocityFrictionIterations *= 100
	world.maxVelocityIterations *= 100

	onDestroy(() => {
		world.maxStabilizationIterations = initialIterations.maxStabilizationIterations
		world.maxVelocityFrictionIterations = initialIterations.maxVelocityFrictionIterations
		world.maxVelocityIterations = initialIterations.maxVelocityIterations
	})
</script>

<Group {position} {rotation}>
	<Collider mass={1} shape={'cuboid'} args={[1.25, 0.4, 0.5]} />

	<!-- CAR BODY MESH -->
	<GLTF
		castShadow
		receiveShadow
		url={base + '/models/cars/2008/2008_baird_silver_coronet_taxicab/scene.gltf'}
		rotation={{ y: 90 * DEG2RAD }}
		scale={0.005}
		position={{ y: -0.6 }}
	/>

	<slot />
	<HTML rotation={{ y: 90 * DEG2RAD }} transform position={{ x: 3 }}>
		<p class="text-xs text-black">
			{($speed * 3.6).toFixed(0)} km/h
		</p>
	</HTML>
</Group>
