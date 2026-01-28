<script>
	const { children } = $props();
</script>

<nav class="flex h-min w-full items-stretch" id="nav">
	<h1 class="border-b-3 border-zinc-950 px-18 py-4">
		<a class="text-h4 font-black" href="/">JOSEPH HEINZ</a>
	</h1>
	<ul
		class="flex grow items-center justify-between border-b-3 border-l-3 border-zinc-950 px-12 py-4"
	>
		{@render children?.()}
	</ul>
</nav>
