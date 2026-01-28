<script>
	import Button from './Button.svelte';
	import { tooltip } from '$lib/utils';
	import { Github, Globe } from '@lucide/svelte';

	const { technologies, links = [] } = $props();
</script>

<article
	class="shadow-custom m-4 grid size-full grid-cols-3 grid-rows-1 items-start justify-between gap-8 rounded-lg border-4 border-zinc-950 bg-amber-200 p-4"
>
	<div class="flex flex-col gap-4">
		<div
			class="shadow-custom relative flex aspect-square max-w-full flex-col overflow-hidden rounded-lg border-4 border-zinc-950"
		>
			<slot name="thumbnail" />
		</div>
		<div class="flex w-full items-center justify-center gap-4">
			{#each links as link}
				<Button
					variant={link.includes('github') ? 'secondary' : 'default'}
					size="small"
					onclick={() => window.open(link)}
				>
					{#if link.includes('github')}<Github />{:else}<Globe />{/if}</Button
				>
			{/each}
		</div>
	</div>
	<div class="col-span-2 flex flex-col">
		<h1 class="text-h4 text-center font-bold">
			<slot name="title" />
		</h1>
		<span class="text-para max-w-[350px] text-center">
			<slot name="description" />
		</span>
		<div class="mt-4 flex w-full items-center justify-center gap-2">
			{#each technologies as tech}
				<!-- The first letter of the tech is capitalized and the rest are lowercase -->
				<i
					use:tooltip={tech.charAt(0).toUpperCase() + tech.slice(1)}
					class={`devicon-${tech}-plain colored text-h6 relative cursor-default`}
				></i>
			{/each}
		</div>
	</div>
</article>
