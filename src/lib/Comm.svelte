<script>
	let { status } = $props();
	let bgColor = status ? 'bg-green-500' : 'bg-red-500';
	let online = 'ONLINE';
	let offline = 'OFFLINE';
	$inspect(status);
</script>

<div
	class={`grid select-none items-center whitespace-nowrap rounded-lg ${bgColor} font-sans text-white mx-3 py-1 w-28`}
>
	<span class="">{status ? online : offline}</span>
</div>
