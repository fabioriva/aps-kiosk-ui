<script>
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	import Alert from '$lib/Alert.svelte';
	import Close from '$lib/Close.svelte';
	import Error from '$lib/Error.svelte';
	import Keypad from '$lib/Keypad.svelte';
	import Success from '$lib/Success.svelte';
	import Video from '$lib/Video.svelte';
	const comm = getContext('comm');
	const page = getContext('page');
	$inspect(comm);
	$inspect(page);
</script>

<Video />
<div class="h-screen m-auto bg-opacity-0 font-medium mx-8 mt-16">
	{#if comm.status}
		{#if page.nr === 1}
			<Alert message="Swipe tag to start" role="info" title="Action required" />
			<!-- <img src="arrow-down.png" alt="arrow-down" class="mx-auto mt-32" width="256" height="256" /> -->
			<button class="mt-16 text-4xl" onclick={() => goto('/faceid')}>Face ID</button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="256"
				height="256"
				fill="#0369a1"
				class="bi bi-arrow-down-square-fill mx-auto mt-16"
				viewBox="0 0 16 16"
			>
				<path
					d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"
				/>
			</svg>
		{:else if page.nr == 2}
			<Close />
		{:else if page.nr == 3}
			<Keypad />
		{:else if page.nr == 4}
			<Success message="Success message" />
		{:else if page.nr == 5}
			<Error message="Error message" />
		{:else}
			<div></div>
		{/if}
	{:else}
		<Error message="KIOSK Offline" />
	{/if}
</div>
