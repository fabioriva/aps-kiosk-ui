<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { setContext } from 'svelte';
	import { PUBLIC_WS } from '$env/static/public';
	import Clock from '$lib/Clock.svelte';
	import Comm from '$lib/Comm.svelte';

	let { children } = $props();
	let comm = $state(false);
	let page = $state({ nr: 0 });
	setContext('page', page);
	onMount(() => {
		const ws = new WebSocket(PUBLIC_WS + '/info');
		ws.onmessage = (e) => {
			const m = JSON.parse(e.data);
			comm = m['comm'];
			page.nr = m['page'];
		};
	});
// 	const heart = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
// </svg>'
</script>

<div class="text-center text-xl">
	<div class="flex align-center items-center absolute top-0 py-3 w-full">
		<div class="flex-none">
			<Comm status={comm} />
		</div>
		<div class="grow font-semibold">KIOSK 01 P{page.nr}</div>
		<div class="flex-none">
			<Clock />
		</div>
	</div>

	<div class="flex flex-col h-screen">
		<div class="m-auto bg-opacity-0 px-1">
			{@render children()}
		</div>
	</div>

	<div class="absolute bottom-0 flex justify-center items-center py-3 w-full">
		<span class="font-medium"
			>© {new Date().getFullYear()} Sotefin SA. Made with <span class="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(239 68 68)" class="bi bi-heart-fill" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
			</svg></span> in Switzerland.</span
		>
	</div>
</div>
