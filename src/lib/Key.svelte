<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let { key } = $props();
	const press = (key) => dispatch('press', { key });
</script>

<button
	class="{Number(key) ? 'text-slate-700 border-slate-500' : 'text-blue-700 border-blue-700'}
    text-6xl h-24 w-24 border-2 rounded-lg active:bg-yellow-500"
	ontouchstart={press(key)}>{key}</button
>
