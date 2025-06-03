<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-min min-h-screen w-screen items-stretch overflow-x-hidden justify-stretch bg-zinc-950 p-6 absolute inset-0">
	<div class="h-min min-h-full w-full overflow-hidden bg-amber-100 text-zinc-950">
		<!-- Renders all children elements -->
		{@render children?.()}
	</div>
</div>
