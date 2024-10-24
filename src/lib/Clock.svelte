<script>
	import { onMount } from 'svelte';
	let date = new Date();
	let hour = $state(date.getHours());
	let min = $state(date.getMinutes());
	let sec = $state(date.getSeconds());
	let dayOrNight = $state('AM');

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
</script>

<div class="clockWrapper mx-3">
	<p class="clockDisplay font-semibold">
		{hour <= 12 ? hour : hour - 12}:{min}:{sec}
		{dayOrNight}
	</p>
</div>
