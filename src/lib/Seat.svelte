<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import arraysEqual from './utils/arraysEqual';

	export let title: string;
	export let ids: string[];

	let hovering = getContext<Writable<string[]>>('hovering');
	let selected = getContext<Writable<string[][]>>('selected');
	let taken = getContext<Writable<string[][]>>('taken');

	$: isSelected = $selected.some((seat) => arraysEqual(seat, ids));
	$: isTaken = $taken.some((seat) => arraysEqual(seat, ids));
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
		if (!isTaken) {
			if (!isSelected) {
				$selected = [...$selected, ids];
			} else {
				$selected = $selected.filter((seat) => !arraysEqual(seat, ids));
			}
		}
	}}
>
	<slot {isSelected} {isTaken}>
		<button class:selected={isSelected} class:taken={isTaken}>
			{title}
		</button>
	</slot>
</span>

<style>
	button {
		background-color: rgba(236, 236, 236, 0);
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
		border: 1px solid rgb(201, 201, 201);
		touch-action: manipulation;
		overscroll-behavior: contain;
	}

	button:hover {
		background-color: rgb(208, 233, 255);
	}

	button.taken {
		background-color: rgb(121, 121, 121);
	}

	button.taken:hover {
		cursor: default;
	}

	button.selected {
		background-color: rgb(58, 104, 255);
	}

	span {
		display: contents;
	}
</style>
