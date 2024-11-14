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
			<Alert message="Swipe tag to start or select face recognition" role="info" title="Action required" />
			<!-- <a class="block mt-16 text-4xl" href="/faceid">Face ID</a> -->
			<!-- <svg
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
		</svg> -->
			<div class="grid grid-cols-2 gap-0">
			<div>
			
			<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="#0369a1" class="bi bi-person-badge mx-auto mt-24" viewBox="0 0 16 16">
				<path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
				<path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
				<div class="mt-4 text-2xl">Tag ID</div>
			</svg>
		</div>

			<button onclick={()=>goto('/faceid')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="#0369a1" class="bi bi-person-bounding-box mx-auto mt-24" viewBox="0 0 16 16">
				<path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"/>
				<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
				<div class="mt-4 text-2xl">Face ID</div>
			</svg>
			</button>
</div>

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
