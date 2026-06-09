<script lang="ts">
	import { PROJECTS } from '$lib/data';
	import { reveal } from '$lib/actions';

	const ARROW = `<svg viewBox="0 0 18 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 5.5h15M12 1l5 4.5-5 4.5"/></svg>`;
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
			{#each PROJECTS as project}
				<a class="grid-item reveal flex flex-col gap-[18px] no-underline" href={project.href} use:reveal>
					<div class="relative overflow-hidden rounded-[8px] border border-hair-2 bg-accent-soft">
						<div
							class="proj-thumb-art relative aspect-[16/10] grid place-items-center transition-colors duration-[350ms]"
						>
							<span
								class="initials font-display font-bold tracking-[0.02em] text-ink opacity-[0.14] transition-opacity duration-[350ms] text-[clamp(40px,7vw,76px)]"
								>{project.initials}</span
							>
							<span class="proj-badge">{@html ARROW}</span>
						</div>
					</div>
					<div class="flex flex-col gap-[10px]">
						<span
							class="self-start rounded-full bg-accent-soft px-[10px] py-[4px] font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink"
							>{project.kind}</span
						>
						<div class="flex items-baseline justify-between gap-[14px]">
							<h3 class="text-[clamp(20px,2.4vw,26px)]">
								<span class="hl-swipe">{project.title}</span>
							</h3>
							<span class="font-mono text-[13px] text-ink-faint">{project.n}</span>
						</div>
						<p class="m-0 max-w-[40ch] text-[15.5px] text-ink-soft">{project.blurb}</p>
						<span class="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft"
							>{project.tags}</span
						>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
