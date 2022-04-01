<script lang="ts">
	export let title: string;
</script>

<slot>
	<button>
		{title}
	</button>
</slot>

<style>
	button {
		background-color: blue;
		border-radius: 4pt;
		aspect-ratio: 1;
	}
</style>
