<script lang="ts">
	import LinearLayout from './LinearLayout.svelte';
	import Seat from './Seat.svelte';

	export let rows: number | (string | number)[];
	export let alphabeticRows: boolean = true;
	export let alphabeticColumns: boolean = false;
	export let columns: number | (string | number)[];
	export let offsetRows: number = 0;
	export let offsetColumns: number = 0;
	export let exclude: { x: number; y: number }[] = [];
	export let reverseRows: boolean = false;
	export let reverseColumns: boolean = false;

	let _rows = computeArray(rows, alphabeticRows, offsetRows, reverseRows);
	let _columns = computeArray(columns, alphabeticColumns, offsetColumns, reverseColumns);

	function computeArray(
		descriptor: number | (string | number)[],
		alphabetic: boolean,
		offset: number,
		reverse: boolean
	) {
		let arr = [];

		if (typeof descriptor === 'number') {
			arr = new Array(descriptor)
				.fill(0)
				.map((x, i) => (alphabetic ? String.fromCharCode(65 + offset + i) : i + offset));
		} else {
			arr = descriptor;
		}

		if (reverse) {
			arr.reverse();
		}

		return arr;
	}
</script>

<LinearLayout columns={_columns.length} rows={_rows.length}>
	{#each _rows as row, y}
		{#each _columns as column, x}
			{#if !exclude.find((v) => v.x === x && v.y === y)}
				<slot {column} {row}>
					<Seat title="{row}{column}" />
				</slot>
			{:else}
				<div />
			{/if}
		{/each}
	{/each}
</LinearLayout>
