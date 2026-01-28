<script>
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="absolute inset-0 flex h-min min-h-screen w-screen items-stretch justify-stretch overflow-x-hidden bg-zinc-950 p-6"
>
	<div class="h-min min-h-full w-full overflow-hidden bg-amber-100 text-zinc-950">
		<!-- Renders all children elements -->
		{@render children?.()}
	</div>
</div>
<div class="size-screen pointer-events-none fixed inset-0 border-24 border-zinc-950"></div>
