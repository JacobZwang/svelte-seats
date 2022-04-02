<script lang="ts">
	export let style = '';
	export let short = false;
</script>

<div {style} class:short>
	<slot />
</div>

<style>
	div {
		display: contents;
	}

	div > :global(*) {
		border-bottom: 8px solid rgb(226, 226, 226);
		background: linear-gradient(white, rgb(236, 236, 236));
		box-shadow: 0px 20px 8px -7px #d1d1d1;
		padding: 4px;
		margin: -4px;
	}

	div.short > :global(*) {
		box-shadow: 0px 7px 4px 4px #d1d1d1;
	}
</style>
