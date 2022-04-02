<script lang="ts">
	export let style = '';
</script>

<div {style}>
	<slot />
</div>

<style>
	div {
		/* transform: rotateX(20deg) perspective(800px); */
		box-shadow: 0px 20px 8px -7px #d1d1d1;
		border-bottom: 8px solid rgb(226, 226, 226);
		padding: 8px;
		background: linear-gradient(white, rgb(236, 236, 236));
	}
</style>
