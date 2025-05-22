<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen h-min w-screen items-stretch justify-stretch bg-zinc-950 p-6">
	<div
		class="w-full h-min min-h-full bg-amber-100 text-zinc-950 overflow-hidden"
	>
		{@render children?.()}
	</div>
</div>
