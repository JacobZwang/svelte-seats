<script lang="ts">
	export let rows: number | (string | number)[];
	export let alphabeticRows: boolean = true;
	export let alphabeticColumns: boolean = false;
	export let columns: number;
	export let offsetRows: number = 0;
	export let offsetColumns: number = 0;

	let _rows = computeArray(rows, alphabeticRows, offsetRows);

	let _columns = computeArray(columns, alphabeticColumns, offsetColumns);

	function computeArray(
		descriptor: number | (string | number)[],
		alphabetic: boolean,
		offset: number
	) {
		if (typeof descriptor === 'number') {
			return new Array(descriptor)
				.fill(0)
				.map((x, i) => (alphabetic ? String.fromCharCode(65 + offset + i) : i + offset));
		} else {
			return descriptor;
		}
	}
</script>

<div
	class="seats-linear-layout"
	style:grid-template-rows="repeat({rows}, 1fr)"
	style:grid-template-columns="repeat({columns}, 1fr)"
>
	{#each _rows as row}
		{#each _columns as column}
			<slot {column} {row} />
		{/each}
	{/each}
</div>

<style>
	.seats-linear-layout {
		display: grid;
	}
</style>
