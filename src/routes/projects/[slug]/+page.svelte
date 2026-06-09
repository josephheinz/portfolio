<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — Joseph Heinz</title>
	<meta name="description" content={data.meta.blurb} />
</svelte:head>

<Nav />

{#if data.meta.cover}
	<div class="relative h-[50vh] min-h-[280px] w-full overflow-hidden bg-panel">
		<img
			src={data.meta.cover}
			alt={data.meta.title}
			class="h-full w-full object-cover"
		/>
	</div>
{/if}

<main class="wrap py-[clamp(56px,9vw,110px)]">
	<a
		class="mb-[clamp(32px,5vw,52px)] inline-flex items-center gap-[8px] font-mono text-[13px] tracking-[0.06em] uppercase text-ink-soft no-underline transition-colors duration-[180ms] hover:text-ink"
		href="/#work"
	>
		<svg
			viewBox="0 0 18 11"
			fill="none"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-[11px] w-[18px] rotate-180"
		>
			<path d="M1 5.5h15M12 1l5 4.5-5 4.5" />
		</svg>
		Back to work
	</a>

	<header class="mb-[clamp(40px,7vw,76px)] border-b border-hair-2 pb-[clamp(32px,5vw,52px)]">
		<span
			class="inline-block rounded-full bg-accent-soft px-[10px] py-[4px] font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink"
		>
			{data.meta.kind}
		</span>
		<h1
			class="mt-[14px] max-w-[18ch] text-[clamp(36px,6.5vw,76px)] tracking-[-0.03em]"
		>
			{data.meta.title}
		</h1>
		<p class="mt-[14px] font-mono text-[13px] tracking-[0.04em] text-ink-soft">
			{data.meta.tags}
		</p>
		<p class="mt-[18px] max-w-[54ch] text-[clamp(17px,1.5vw,20px)] text-ink-soft">
			{data.meta.blurb}
		</p>
	</header>

	<article class="prose-site prose max-w-[70ch]">
		{@html data.html}
	</article>
</main>

<footer class="border-t border-hair-2">
	<div class="wrap flex flex-wrap justify-between gap-5 py-[34px]">
		<span class="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft"
			>© 2026 Joseph Heinz</span
		>
		<a
			href="/#work"
			class="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft no-underline transition-colors hover:text-ink"
			>← All projects</a
		>
	</div>
</footer>
