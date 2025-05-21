<script>
	const { children } = $props();
</script>

<nav class="flex h-min w-full items-stretch">
	<div class="border-3 border-zinc-950 px-18 py-4">
        <h1 class="text-h4 font-bold">JOSEPH HEINZ</h1>
    </div>
    <ul class="border-3 border-zinc-950 grow flex items-center justify-between px-12 py-4">
        {@render children?.()}
    </ul>
</nav>
