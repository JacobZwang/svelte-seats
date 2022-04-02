<script lang="ts">
	export let rows: number;
	export let columns: number;

	export let style: string = '';
</script>

<div
	{style}
	class="seats-linear-layout"
	style:grid-template-rows="repeat({rows}, 1fr)"
	style:grid-template-columns="repeat({columns}, 1fr)"
	style:grid-column="span {columns}"
	style:grid-row="span {rows}"
	style:aspect-ratio="{columns}/{rows}"
>
	<slot />
</div>

<style>
	.seats-linear-layout {
		display: grid;
	}
</style>
