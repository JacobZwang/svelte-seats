<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let taken: (string | number)[][] = [];
	export let selected: (string | number)[][] = [];

	let _hovering = writable([]);
	let _selected = writable(selected);
	let _taken = writable(taken);

	setContext('hovering', _hovering);
	setContext('selected', _selected);
	setContext('taken', _taken);
</script>

<slot hovering={$_hovering} />
