<script>
	import Seat from '$lib/Seat.svelte';
	import Seats from '$lib/Seats.svelte';
	import SeatsLinearLayout from '$lib/SeatsLinearLayout.svelte';
</script>

<h1>Svelte Seats</h1>

<Seats>
	<div>
		<SeatsLinearLayout
			columns={Array.from({ length: 3 }, (v, i) => (i + 1) * 2)}
			rows={['PP', 'NN', 'MM']}
			offsetColumns={22}
			let:row
			let:column
		>
			<Seat title="{row}:{column}" />
		</SeatsLinearLayout>

		<div />

		<SeatsLinearLayout
			columns={9}
			rows={['PP', 'NN', 'MM', 'LL', 'KK', 'JJ', 'HH', 'GG']}
			offsetColumns={22}
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
