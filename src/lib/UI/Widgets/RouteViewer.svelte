<script lang="ts">
	export let route: string[]
</script>

<p>
	{@html route.join(' <span style="color: var(--text);">-></span> ')}
</p>

<style>
	p {
		color: var(--primary);
	}
</style>
