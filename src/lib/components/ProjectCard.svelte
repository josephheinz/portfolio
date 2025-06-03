<script>
	import Button from './Button.svelte';
    import { tooltip } from '$lib/utils';

	const { technologies, links = [] } = $props();
</script>

<div
	class="shadow-custom m-4 flex flex-col items-center justify-between gap-8 rounded-lg border-4 border-zinc-950 bg-amber-200 p-4"
>
	<div
		class="shadow-custom relative max-w-full overflow-hidden rounded-lg border-4 border-zinc-950"
	>
		<slot name="thumbnail" />
	</div>
	<h1 class="text-h4 font-bold text-center">
		<slot name="title" />
	</h1>
	<span class="text-para max-w-[350px] text-center">
		<slot name="description" />
	</span>
	<div class="flex w-full items-center justify-center gap-2">
		{#each technologies as tech}
		<!-- The first letter of the tech is capitalized and the rest are lowercase -->
			<i use:tooltip={tech.charAt(0).toUpperCase() + tech.slice(1)} class={`devicon-${tech}-plain colored text-h6 relative cursor-default`}></i>
		{/each}
	</div>
	<div class="flex w-full items-center justify-center gap-4">
		{#each links as link}
			<Button
				variant={link.includes('github') ? 'secondary' : 'default'}
				onclick={() => window.open(link)}>{link.includes('github') ? 'GitHub' : 'Live Demo'}</Button
			>
		{/each}
	</div>
</div>
