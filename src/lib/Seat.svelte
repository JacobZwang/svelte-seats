<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let title: string;
	export let ids: string[];

	let hovering = getContext<Writable<string[]>>('hovering');
</script>

<span
	on:mouseover={() => {
		$hovering = ids;
	}}
	on:focus={() => {
		$hovering = ids;
	}}
	on:mouseout={() => {
		$hovering = [];
	}}
	on:blur={() => {
		$hovering = [];
	}}
>
	<slot>
		<button>
			{title}
		</button>
	</slot>
</span>

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

	span {
		display: contents;
	}
</style>
