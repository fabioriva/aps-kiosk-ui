<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_CAMERA_SRC } from '$env/static/public';
	// let { data } = $props();
	// console.log(data);
	// console.log(document.location);
	// console.log(document.location.pathname);
	// console.log(document.location.pathname.split('/').pop());
	const mode = document.location.pathname.split('/').pop();
	const queryString = document.location.search; // Returns:'?q=123'
	// console.log(PUBLIC_CAMERA_SRC + '/face/' + mode + queryString);
	// Further parsing:
	// const params = new URLSearchParams(queryString);
	// const n = params.get('name'); // is the number 123
	// const s = params.get('surname'); // is the number 123
	// console.log(n, s);
</script>

<div class="flex items-center justify-center h-screen">
	<iframe
		src={PUBLIC_CAMERA_SRC + '/face/' + mode + queryString}
		title="picamera video streaming"
		width="800"
		height="1280"
		scrolling="no"
		marginwidth="0"
		marginheight="0"
		frameborder="0"
		class="w-full pointer-events-auto -z-50"
	></iframe>
	<button id="button" class="z-50" onclick={() => goto('/faceid')}>Back</button>
</div>

<style>
	#button {
		/* display: block; */
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
		height: 96px;
		bottom: 128px;
		background-color: rgb(0 150 0 / 50%);
		border: 1px solid rgb(255 255 255 / 70%);
		box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
		font-size: 48px;
		font-family: 'Lucida Grande', 'Arial', sans-serif;
		color: rgb(255 255 255 / 100%);
	}
</style>
