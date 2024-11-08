<script>
	import { goto } from '$app/navigation';
	function navigateToStream(mode, query = '') {
		print('/stream' + mode + query);
		goto('/stream' + mode + query);
	}
</script>

<div class="flex items-center justify-center h-screen">
	<div class="flex flex-col space-y-16">
		<button
			class="bg-sky-700 hover:bg-sky-900 text-white text-4xl font-semibold py-6 px-12 rounded-lg"
			onclick={() => navigateToStream('/capture', '?name=Fabio&surname=Riva')}>Face capture</button
		>
		<button
			class="bg-sky-700 hover:bg-sky-900 text-white text-4xl font-semibold py-6 px-12 rounded-lg"
			onclick={() => navigateToStream('/detection')}>Face detection</button
		>
		<button
			class="bg-sky-700 hover:bg-sky-900 text-white text-4xl font-semibold py-6 px-12 rounded-lg"
			onclick={() => navigateToStream('/recognition')}>Face recognition</button
		>
		<button
			class="bg-sky-700 hover:bg-sky-900 text-white text-4xl font-semibold py-6 px-12 rounded-lg"
			onclick={() => navigateToStream('/training')}>Face training</button
		>
		<button
			class="bg-sky-700 hover:bg-sky-900 text-white text-4xl font-semibold py-6 px-12 rounded-lg"
			onclick={() => goto('/')}>Back</button
		>
	</div>
</div>
