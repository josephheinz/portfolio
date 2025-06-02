<script>
	import '../app.css';
	export const prerender = true;

	let { children } = $props();
</script>

<div class="flex h-min min-h-screen w-screen items-stretch justify-stretch bg-zinc-950 p-6">
	<div class="h-min min-h-full w-full overflow-hidden bg-amber-100 text-zinc-950">
		{@render children?.()}
	</div>
</div>
