<script>
	let { message, title } = $props();
</script>

<div
	class="bg-yellow-100 border-t-4 border-yellow-700 rounded-b text-yellow-700 px-4 py-3 shadow-md"
	role="alert"
>
	<p class="font-bold text-xl">{title}</p>
	<p class="py-4 text-5xl uppercase">{message}</p>
</div>
