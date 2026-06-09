<script lang="ts">
	import type { ProjectMeta } from '$lib/projects';
	import { reveal } from '$lib/actions';

	const ARROW = `<svg viewBox="0 0 18 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 5.5h15M12 1l5 4.5-5 4.5"/></svg>`;

	interface Props {
		project: ProjectMeta;
	}
	let { project }: Props = $props();

	let videoEl: HTMLVideoElement | undefined = $state();
	let hovering = $state(false);

	function isVideoFile(url: string) {
		return /\.(mp4|webm|ogg|mov)$/i.test(url);
	}

	function onEnter() {
		hovering = true;
		if (videoEl) videoEl.play().catch(() => {});
	}

	function onLeave() {
		hovering = false;
		if (videoEl) {
			videoEl.pause();
			videoEl.currentTime = 0;
		}
	}
</script>

<a
	class="grid-item reveal flex flex-col gap-[18px] no-underline"
	href="/projects/{project.slug}"
	use:reveal
	onmouseenter={onEnter}
	onmouseleave={onLeave}
>
	<div class="relative overflow-hidden rounded-[8px] border border-hair-2 bg-accent-soft">
		<div
			class="proj-thumb-art relative aspect-[16/10] grid place-items-center transition-colors duration-[350ms]"
		>
			<!-- initials — always rendered as base layer -->
			<span
				class="initials font-display font-bold tracking-[0.02em] text-ink opacity-[0.14] transition-opacity duration-[350ms] text-[clamp(40px,7vw,76px)]"
			>
				{project.initials}
			</span>

			<!-- cover image -->
			{#if project.cover}
				<img
					src={project.cover}
					alt={project.title}
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms]"
					style="opacity: {hovering && project.video ? 0 : 1}"
				/>
			{/if}

			<!-- hover media -->
			{#if project.video}
				{#if isVideoFile(project.video)}
					<video
						bind:this={videoEl}
						src={project.video}
						muted
						loop
						playsinline
						class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms]"
						style="opacity: {hovering ? 1 : 0}"
					></video>
				{:else}
					<!-- GIF or animated image -->
					<img
						src={project.video}
						alt=""
						class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms]"
						style="opacity: {hovering ? 1 : 0}"
					/>
				{/if}
			{/if}

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
		<span class="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">{project.tags}</span>
	</div>
</a>
