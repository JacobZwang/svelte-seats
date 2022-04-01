<script>
	import Seat from '$lib/Seat.svelte';
	import Seats from '$lib/Seats.svelte';
	import SeatsLinearLayout from '$lib/SeatsLinearLayout.svelte';
</script>

<h1>Svelte Seats</h1>

<Seats>
	<SeatsLinearLayout columns={3} rows={['PP', 'NN', 'MM']} offsetColumns={22} let:row let:column>
		<Seat title="{row}:{column}" />
	</SeatsLinearLayout>
</Seats>
