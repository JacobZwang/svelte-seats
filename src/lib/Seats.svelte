<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let hovering = writable([]);

	setContext('hovering', hovering);
</script>

<slot hovering={$hovering} />
