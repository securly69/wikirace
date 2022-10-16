<script lang="ts">
	import { Mesh } from '@threlte/core'
	import { AutoColliders } from '@threlte/rapier'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
</script>

<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
	<Mesh
		receiveShadow
		geometry={new BoxGeometry(1500, 1, 1500)}
		material={new MeshStandardMaterial()}
		position={{ y: -1 }}
	/>
</AutoColliders>
