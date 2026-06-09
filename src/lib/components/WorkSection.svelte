<script lang="ts">
	import type { ProjectMeta } from '$lib/projects';
	import ProjectCard from './ProjectCard.svelte';

	interface Props {
		projects: ProjectMeta[];
	}
	let { projects }: Props = $props();
</script>

<section class="relative border-t border-hair-2 py-[clamp(80px,13vw,170px)]" id="work">
	<div class="wrap">
		<div class="mb-[clamp(50px,7vw,92px)]">
			<span class="label text-ink-soft">01 — Selected Work</span>
			<div class="mt-[18px] flex flex-wrap items-end justify-between gap-[30px]">
				<h2 class="max-w-[18ch] text-[clamp(30px,4.4vw,50px)]">
					A few things I've built and shipped.
				</h2>
				<p class="m-0 max-w-[38ch] text-[16px] text-ink-soft">Client products, platforms, and games.</p>
			</div>
		</div>

		<div
			class="grid grid-cols-2 gap-x-[clamp(24px,4vw,44px)] gap-y-[clamp(28px,5vw,56px)] max-[680px]:grid-cols-1"
		>
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
