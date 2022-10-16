<script lang="ts">
	import TopDownViewer from '$lib/Rendering/Scene/TopDownViewer.svelte'
	import GuiControls from '$lib/Rendering/Scene/GuiControls.svelte'
</script>

<TopDownViewer debug={true}>
	<GuiControls />
</TopDownViewer>
