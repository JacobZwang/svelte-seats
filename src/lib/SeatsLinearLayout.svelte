<script lang="ts">
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

<div
	class="seats-linear-layout"
	style:grid-template-rows="repeat({_rows.length}, 1fr)"
	style:grid-template-columns="repeat({_columns.length}, 1fr)"
	style:grid-column="span {_columns.length}"
	style:grid-row="span {_rows.length}"
	style:aspect-ratio="{_columns.length}/{_rows.length}"
>
	{#each _rows as row, y}
		{#each _columns as column, x}
			{#if !exclude.find((v) => v.x === x && v.y === y)}
				<slot {column} {row} />
			{:else}
				<div />
			{/if}
		{/each}
	{/each}
</div>

<style>
	.seats-linear-layout {
		display: grid;
	}
</style>
