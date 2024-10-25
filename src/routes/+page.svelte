<script>
	import { getContext } from 'svelte';

	const VIDEO_SRC = 'seattle.mp4';
	// const VIDEO_SRC = 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4';
	const page = getContext('page');
	$inspect(page);
</script>

<div class="font-medium">
	<video autoplay loop muted src={VIDEO_SRC} class="px-0"></video>
	<div class="mt-16 space-y-16">
		<div
			class="bg-zinc-100 border-t-4 border-zinc-700 rounded-b text-zinc-700 px-4 py-3 shadow-md"
			role="alert"
		>
			<p class="font-bold text-xl">Action required</p>
			<p class="py-4 text-5xl uppercase">Swipe tag to start</p>
		</div>
		<!-- <img src="finger-down-148.png" alt="finger-down" class="mx-auto" /> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			fill="rgb(63 63 70)"
			class="bi bi-arrow-down-circle mx-auto"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
			/>
		</svg>
	</div>
</div>
