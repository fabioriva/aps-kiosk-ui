<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { PUBLIC_WS } from '$env/static/public';
	import Clock from '$lib/Clock.svelte';
	import Comm from '$lib/Comm.svelte';

	let { children } = $props();
	let comm = $state(false);
	onMount(() => {
		const ws = new WebSocket(PUBLIC_WS + '/info');
		ws.onmessage = (e) => {
			const m = JSON.parse(e.data);
			comm = m['comm'];
		};
	});
</script>

<div class="text-center text-lg">
	<div class="flex align-center items-center absolute top-0 py-3 w-full">
		<div class="flex-none">
			<Comm status={comm} />
		</div>
		<div class="grow font-semibold">KIOSK 01</div>
		<div class="flex-none">
			<Clock />
		</div>
	</div>

	<div class="flex flex-col h-screen">
		<div class="m-auto bg-opacity-0">
			{@render children()}
		</div>
	</div>

	<div class="absolute bottom-0 flex justify-center items-center py-3 w-full">
		<span class="font-medium"
			>© {new Date().getFullYear()} Sotefin SA. Made with ❤️ in Switzerland.</span
		>
	</div>
</div>
