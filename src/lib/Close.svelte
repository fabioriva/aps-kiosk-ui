<script>
	import Alert from '$lib/Alert.svelte';

	let isPressed = $state(false);

	const push = async () => {
		isPressed = true;
		await fetch('/api/push');
	};
	const release = async () => {
		isPressed = false;
		await fetch('/api/release');
	};
</script>

<Alert message="Press & hold button to close" role="warning" title="Action required" />
<div class="mt-24">
	<button
		class={`w-[256px] h-[256px] rounded-full bg-yellow-500 border-4 border-yellow-600 opacity-100 shadow-2xl shadow-slate-700 font-bold text-2xl text-amber-700 ${isPressed && 'bg-gradient-to-br from-amber-500 to-amber-600 text-amber-600'}`}
		ontouchend={release}
		onclick={push}
		ontouchstart={push}>PUSH TO CLOSE</button
	>
</div>
