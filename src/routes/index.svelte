<script>
	import Seat from '$lib/Seat.svelte';
	import Seats from '$lib/Seats.svelte';
	import SeatsLinearLayout from '$lib/SeatsLinearLayout.svelte';
	import range from '$lib/utils/range';
</script>

<h1>Svelte Seats</h1>

<Seats>
	<div>
		<SeatsLinearLayout
			columns={Array.from({ length: 3 }, (v, i) => i * 2 + 22)}
			rows={['PP', 'NN', 'MM']}
			offsetColumns={22}
			let:row
			let:column
		>
			<Seat title="{row}:{column}" />
		</SeatsLinearLayout>

		<div />

		<SeatsLinearLayout
			columns={Array.from({ length: 9 }, (v, i) => i * 2 + 2)}
			rows={['PP', 'NN', 'MM', 'LL', 'KK', 'JJ', 'HH', 'GG']}
			exclude={range(1, 8, 0, 0)}
			let:row
			let:column
		>
			<Seat title="{row}:{column}" />
		</SeatsLinearLayout>
	</div>
</Seats>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(15, 1fr);
		grid-auto-rows: auto;
	}
</style>
