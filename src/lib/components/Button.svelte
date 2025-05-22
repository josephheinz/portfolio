<script>
	const { children, onclick = () => {} } = $props();
</script>

<button
	class="shadow-custom text-para pointer-cursor flex items-center justify-center rounded-lg border-4 border-zinc-950 bg-fuchsia-400 p-3 font-normal transition-all hover:shadow-none"
	{onclick}
>
	{@render children?.()}
</button>
