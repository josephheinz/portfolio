<script>
	const { tech, name = '' } = $props();
</script>

<div
	class="shadow-custom flex flex-col items-center justify-between gap-8 rounded-lg border-4 border-zinc-950 bg-amber-200 p-8"
>
	<img
		src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
	/>
	<p class="text-2xl font-black">{name}</p>
</div>
