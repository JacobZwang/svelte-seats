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
		background-color: rgb(236, 236, 236);
		border-radius: 4pt;
		aspect-ratio: 1;
		padding: 0;
		text-align: center;
		font-size: 8px;
		font-weight: bold;
		border: none;
		transition: background-color;
		transition-duration: 200ms;
		cursor: pointer;
	}

	button:hover {
		background-color: rgb(208, 233, 255);
	}
</style>
