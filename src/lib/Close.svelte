<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	const mesg = getContext('mesg');
	$inspect(mesg);
	const messages = [
		'press button to close',
		'gate closed',
		'press button to close',
		'gate closing',
		'gate opening'
	];
	let isPressed = $state(false);
	const push = async () => {
		isPressed = true;
		// await fetch('/api/push');
		await fetch('/api/close/1');
	};
	const release = async () => {
		isPressed = false;
		// await fetch('/api/release');
		await fetch('/api/close/0');
	};
</script>

<Alert message={messages[mesg.nr]} role="warning" title="Action required" />
<div class="mt-24">
	<button
		class={`w-[256px] h-[256px] rounded-full bg-yellow-500 border-4 border-yellow-600 opacity-100 shadow-2xl shadow-slate-700 font-bold text-2xl text-amber-700 uppercase ${isPressed && 'bg-gradient-to-br from-amber-500 to-amber-600 text-amber-600'}`}
		ontouchend={release}
		ontouchstart={push}>hold to close</button
	>
</div>
