<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Key from '$lib/Key.svelte';
	// import Video from '$lib/Video.svelte';
	const page = getContext('page');
	$inspect(page);

	const push = async () => {
		console.log('pushed');
		await fetch('/api/push');
	};
	const release = async () => {
		console.log('released');
		await fetch('/api/release');
	};

	let pin = $state('');
	const handlePress = (e) => {
		alert('pressed ' + e.detail.key);
		// pin += e.detail.key;
		// alert('Hello ' + pin);
	};
</script>

<div class="font-medium">
	<!-- <Video /> -->
	<div class="mx-8 my-16 space-y-8">
		{#if page.nr === 1}
			<Alert message="Swipe tag to start" title="Action required" />
			<!-- <img src="finger-down-148.png" alt="finger-down" class="mx-auto" /> -->
			<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			fill="rgb(2 6 23)"
			class="bi bi-arrow-down-circle mx-auto"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
			/>
		</svg> -->
		{:else if page.nr == 2}
			<Alert message="Press & hold button to close" title="Action required" />
			<button class="bg-yellow-700 p-16" ontouchend={release} ontouchstart={push}>Press me</button>
			<!-- <button
				id="btn-close"
				class={`w-[256px] h-[256px] rounded-full bg-yellow-500 border-4 border-yellow-600 opacity-100 shadow-2xl shadow-slate-700 font-bold text-2xl text-amber-700 ${isPressed && 'bg-gradient-to-br from-amber-500 to-amber-600 text-amber-600'}`}
				on:touchend={unpress}
				on:touchstart={press}>PUSH TO CLOSE</button
			> -->
		{:else if page.nr == 3}
			<Alert message="Enter you PIN code" title="Action required" />
			<p>keypad digit: {pin}</p>
			<div class="grid grid-cols-4 gap-1.5 justify-items-center bg-sky-300 mx-40">
				<Key key={'1'} on:press={handlePress} />
				<Key key={'2'} on:press={handlePress} />
				<Key key={'3'} on:press={handlePress} />
				<Key key={'C'} on:press={handlePress} />
				<Key key={'4'} on:press={handlePress} />
				<Key key={'5'} on:press={handlePress} />
				<Key key={'6'} on:press={handlePress} />
				<Key key={'D'} on:press={handlePress} />
				<Key key={'7'} on:press={handlePress} />
				<Key key={'8'} on:press={handlePress} />
				<Key key={'9'} on:press={handlePress} />
				<Key key={'E'} on:press={handlePress} />
				<Key key={'A'} on:press={handlePress} />
				<Key key={'0'} on:press={handlePress} />
				<Key key={'B'} on:press={handlePress} />
				<Key key={'F'} on:press={handlePress} />
			</div>

			<!-- <button
				class="{Number(1)
					? 'border border-yellow-900'
					: 'border border-blue-900'} text-6xl h-24 w-24 rounded active:bg-yellow-500"
				ontouchstart={handlePress('1')}>{1}</button
			> -->
		{:else}
			<div>page {page.nr}</div>
		{/if}
	</div>
</div>
