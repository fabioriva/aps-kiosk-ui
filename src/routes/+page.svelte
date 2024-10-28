<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Keypad from '$lib/Keypad.svelte';
	const page = getContext('page');
	$inspect(page);
	const press = async () => await fetch('/api/push');
	const release = async () => await fetch('/api/release');
</script>

<div class="font-medium">
	<div class="mx-8 my-16 space-y-8">
		{#if page.nr === 1}
			<Alert message="Swipe tag to start" role="warning" title="Action required" />
			<!-- <img src="finger-down-148.png" alt="finger-down" class="mx-auto" /> -->
			<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			fill="rgb(2 6 23)"
			class="bi bi-arrow-down-circle mx-auto"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
			/>
		</svg> -->
		{:else if page.nr == 2}
			<Alert message="Press & hold button to close" role="warning" title="Action required" />
			<button class="bg-yellow-700 p-16" ontouchend={release} ontouchstart={press}>Press me</button>
		{:else if page.nr == 3}
			<Alert message="Enter PIN code" role="warning" title="Action required" />
			<Keypad />
		{:else}
			<div>page {page.nr}</div>
		{/if}
	</div>
</div>
