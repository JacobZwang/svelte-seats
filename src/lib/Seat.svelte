<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import arraysEqual from './utils/arraysEqual';

	export let title: string;
	export let ids: string[];

	let hovering = getContext<Writable<string[]>>('hovering');
	let selected = getContext<Writable<string[][]>>('selected');
	let taken = getContext<Writable<string[][]>>('taken');

	$: isSelected = $selected.includes(ids);
	$: isTaken = $taken.some((seat) => arraysEqual(seat, ids));

	console.log($taken, ids);
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
	on:click={() => {
		$selected = [...$selected, ids];
	}}
>
	<slot {isSelected}>
		<button class:selected={isSelected} class:taken={isTaken}>
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

	button.selected {
		background-color: blue;
	}

	button.taken {
		background-color: rgb(121, 121, 121);
	}

	span {
		display: contents;
	}
</style>
