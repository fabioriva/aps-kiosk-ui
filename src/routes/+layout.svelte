<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { setContext } from 'svelte';
	import { PUBLIC_WS } from '$env/static/public';
	import Clock from '$lib/Clock.svelte';
	import Comm from '$lib/Comm.svelte';
	import Footer from '$lib/Footer.svelte';
	import Video from '$lib/Video.svelte';

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
</script>

<div class="text-center text-xl p-0">
	<div class="flex align-center items-center absolute top-0 py-3 w-full">
		<div class="flex-none">
			<Comm status={comm} />
		</div>
		<div class="grow font-semibold">KIOSK 01 P{page.nr}</div>
		<div class="flex-none">
			<Clock />
		</div>
	</div>

	<Video />
	<div class="h-screen m-auto bg-opacity-0">
		{@render children()}
	</div>

	<div class="absolute bottom-0 border-t border-zinc-200 w-full"><Footer /></div>
</div>
