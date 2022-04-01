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
		padding: 0;
		text-align: center;
		font-size: 10px;
		font-weight: bold;
	}
</style>
