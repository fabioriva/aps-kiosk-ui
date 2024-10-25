<script>
	import { getContext } from 'svelte';

	const VIDEO_SRC = 'seattle.mp4';
	// const VIDEO_SRC = 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4';
	const page = getContext('page');
	$inspect(page);
</script>

<div class="font-medium space-y-32">
	<video autoplay loop muted src={VIDEO_SRC} class="px-0"></video>
	<p class="uppercase text-6xl">swipe tag to start</p>
	<img src="finger-down-148.png" alt="finger-down" class="mx-auto" />
</div>
