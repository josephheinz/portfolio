<script>
	const { tech, name = '' } = $props();
</script>

<div
	class="shadow-custom flex flex-col items-center justify-between gap-8 rounded-lg border-4 border-zinc-950 bg-amber-200 p-8"
>
	<i class={`devicon-${tech}-plain colored text-h1 relative cursor-default`}></i>
	<p class="text-h5 font-black">{name}</p>
</div>
