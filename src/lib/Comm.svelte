<script>
	let { status } = $props();
	let online = 'ONLINE';
	let offline = 'OFFLINE';
	$inspect(status);
</script>

<div
	class={`grid select-none items-center whitespace-nowrap rounded-lg ${status ? 'bg-green-600' : 'bg-red-600'} font-sans text-white mx-3 py-1 w-28`}
>
	<span class="font-bold">{status ? online : offline}</span>
</div>
