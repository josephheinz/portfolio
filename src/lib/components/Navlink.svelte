<script>
	const { children, href = '' } = $props();
</script>

<li class="text-h6 uppercase">
	<a {href} class="border-b-2 border-transparent transition-all hover:border-zinc-950"
		>{@render children?.()}</a
	>
</li>
