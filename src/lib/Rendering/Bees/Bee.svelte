<script lang="ts">
	import { Group, type Position, type Rotation } from '@threlte/core'
	import { Float, GLTF } from '@threlte/extras'
	import { Collider } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { base } from '$app/paths'

	export let position: Position | undefined
	export let rotation: Rotation | undefined = undefined
</script>

<Group {position} {rotation}>
	<Collider mass={1} shape={'cuboid'} args={[1.25, 0.4, 0.5]} />

	<Float speed={9} rotationIntensity={0.3} floatIntensity={6}>
		<GLTF
			castShadow
			url={base + '/models/honey_pot_picnic/bee.glb'}
			scale={2}
			rotation={{ y: -122.5 * DEG2RAD }}
		/>
	</Float>

	<slot />
</Group>
