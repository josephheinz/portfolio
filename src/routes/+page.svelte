<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import WorkSection from '$lib/components/WorkSection.svelte';
	import { reveal } from '$lib/actions';
	import { EXPERIENCE, CERTIFICATIONS } from '$lib/data';

	let { data } = $props();
</script>

<span id="top"></span>
<Nav />

<!-- ============ HERO ============ -->
<header class="pt-[clamp(40px,7vw,86px)] pb-[clamp(56px,10vw,130px)]">
	<div
		class="wrap grid grid-cols-[1fr_auto] items-center gap-[clamp(36px,6vw,80px)] max-[820px]:grid-cols-1"
	>
		<div>
			<div class="mb-[clamp(28px,5vw,52px)] flex items-center gap-[12px]">
				<span class="h-2 w-2 shrink-0 rounded-full bg-green"></span>
				<span class="label text-ink-soft">Fullstack Developer — Available for work</span>
			</div>
			<h1 class="max-w-[16ch] text-[clamp(40px,7.4vw,88px)] tracking-[-0.03em]">
				I build reliable software that people
				<span class="sig"
					>trust<svg
						viewBox="0 0 200 22"
						preserveAspectRatio="none"
						fill="none"
						stroke="currentColor"
						stroke-width="7"
						stroke-linecap="round"><path d="M6 13 Q55 6 100 12 T194 11" /></svg
					></span
				>.
			</h1>
			<p
				class="mt-[clamp(28px,4vw,44px)] max-w-[52ch] text-[clamp(18px,1.6vw,21px)] text-ink-soft"
			>
				I'm <strong class="font-semibold text-ink">Joseph Heinz</strong>, a fullstack developer who
				ships polished products end-to-end. I care about the details users actually feel —
				performance, motion, and interfaces that simply make sense.
			</p>
			<div class="mt-[clamp(34px,5vw,52px)] flex flex-wrap items-center gap-[28px]">
				<a class="tlink" href="#work"
					>View selected work
					<svg
						viewBox="0 0 18 11"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M1 5.5h15M12 1l5 4.5-5 4.5" /></svg
					></a
				>
				<a class="tlink tlink-muted" href="#contact">Get in touch</a>
			</div>
		</div>

		<figure class="m-0 justify-self-end max-[820px]:order-first max-[820px]:justify-self-start">
			<div
				class="relative overflow-hidden rounded-full border border-hair-2 bg-panel"
				style="width:clamp(160px,22vw,280px);height:clamp(160px,22vw,280px)"
			>
				<div
					class="absolute inset-0 flex select-none items-center justify-center font-display font-bold tracking-[-0.02em] text-ink-faint"
					style="font-size:clamp(40px,7vw,72px)"
				>
					JH
				</div>
			</div>
		</figure>
	</div>
</header>

<!-- ============ WORK ============ -->
<WorkSection projects={data.projects} />

<!-- ============ ABOUT ============ -->
<section class="relative border-t border-hair-2 py-[clamp(80px,13vw,170px)]" id="about">
	<div class="wrap">
		<div class="mb-[clamp(50px,7vw,92px)]">
			<span
				class="label inline-block rounded-full bg-accent-soft px-[12px] py-[5px] text-ink"
				>02 — About</span
			>
		</div>
		<div
			class="grid grid-cols-[1.3fr_0.9fr] items-start gap-[clamp(40px,7vw,88px)] max-[820px]:grid-cols-1"
		>
			<div>
				<p
					class="reveal font-display font-medium leading-[1.28] tracking-[-0.015em] text-[clamp(23px,3vw,34px)]"
					use:reveal
				>
					Half engineer, half tinkerer. I like problems that need both a
					<span
						class="bg-[linear-gradient(transparent_62%,rgba(255,201,30,0.18)_62%)]"
						>solid architecture</span
					> and a sense of play.
				</p>
				<div class="reveal mt-[26px] max-w-[54ch] text-ink-soft" use:reveal>
					<p class="mb-4">
						For seven years I've built fullstack products — APIs, dashboards, design systems, the
						works — and I obsess over the parts users actually feel: latency, motion, copy, and the
						small states in between.
					</p>
					<p class="mb-0">
						On weekends I make games. That habit rewired how I build everything: prototype fast, tune
						the feel, and never ship something that's merely functional when it could be effortless.
					</p>
				</div>
				<div class="reveal mt-[30px]" use:reveal>
					<span class="label mb-[12px] block text-ink-soft">Toolkit</span>
					<div class="font-mono text-[14px] leading-loose text-ink">
						TypeScript<span class="mx-[8px] text-ink-faint">/</span>React<span
							class="mx-[8px] text-ink-faint">/</span
						>Next.js<span class="mx-[8px] text-ink-faint">/</span>Node<span
							class="mx-[8px] text-ink-faint">/</span
						>Go<span class="mx-[8px] text-ink-faint">/</span>Postgres<br />
						Unity<span class="mx-[8px] text-ink-faint">/</span>C#<span
							class="mx-[8px] text-ink-faint">/</span
						>WebGL<span class="mx-[8px] text-ink-faint">/</span>Design systems<span
							class="mx-[8px] text-ink-faint">/</span
						>Motion &amp; UX
					</div>
				</div>
			</div>

			<figure
				class="reveal m-0 sticky top-[110px] max-[820px]:static max-[820px]:order-first max-[820px]:max-w-[320px]"
				use:reveal
			>
				<div
					class="relative block w-full overflow-hidden rounded-[4px] border border-hair-2 bg-panel aspect-[4/5]"
				>
					<div
						class="absolute inset-0 flex select-none items-center justify-center font-display font-bold tracking-[-0.02em] text-ink-faint"
						style="font-size:clamp(32px,6vw,56px)"
					>
						JH
					</div>
				</div>
				<figcaption class="label mt-[14px] text-ink-soft">Joseph Heinz — est. 2018</figcaption>
			</figure>
		</div>
	</div>
</section>

<!-- ============ EXPERIENCE ============ -->
<section class="relative border-t border-hair-2 py-[clamp(80px,13vw,170px)]" id="experience">
	<div class="wrap">
		<div class="mb-[clamp(50px,7vw,92px)]">
			<span
				class="label inline-block rounded-full bg-accent-soft px-[12px] py-[5px] text-ink"
				>03 — Experience</span
			>
			<div class="mt-[18px] flex flex-wrap items-end justify-between gap-[30px]">
				<h2 class="max-w-[18ch] text-[clamp(30px,4.4vw,50px)]">Where I've worked.</h2>
				<a class="tlink tlink-muted" href="/resume.pdf">Download résumé (PDF)</a>
			</div>
		</div>
		<div class="flex flex-col">
			{#each EXPERIENCE as item, i}
				<div
					class="reveal grid grid-cols-[150px_1fr] items-baseline gap-[24px] border-t border-hair py-[clamp(24px,3vw,34px)] max-[600px]:grid-cols-1 max-[600px]:gap-[6px]"
					class:border-b={i === EXPERIENCE.length - 1}
					use:reveal
				>
					<span class="font-mono text-[13px] tracking-[0.04em] text-ink-soft">{item.years}</span>
					<div>
						<div class="font-display font-semibold text-[clamp(19px,2.2vw,24px)]">{item.role}</div>
						<div class="mt-[3px] text-[16px] text-ink-soft">{item.company}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============ CERTIFICATIONS ============ -->
<section class="relative border-t border-hair-2 py-[clamp(80px,13vw,170px)]" id="certifications">
	<div class="wrap">
		<div class="mb-[clamp(50px,7vw,92px)]">
			<span
				class="label inline-block rounded-full bg-accent-soft px-[12px] py-[5px] text-ink"
				>04 — Certifications</span
			>
			<div class="mt-[18px]">
				<h2 class="max-w-[18ch] text-[clamp(30px,4.4vw,50px)]">What I've earned.</h2>
			</div>
		</div>
		<div class="flex flex-col">
			{#each CERTIFICATIONS as cert, i}
				<div
					class="reveal grid grid-cols-[150px_1fr] items-center gap-[24px] border-t border-hair py-[clamp(24px,3vw,34px)] max-[600px]:grid-cols-1 max-[600px]:gap-[6px]"
					class:border-b={i === CERTIFICATIONS.length - 1}
					use:reveal
				>
					<span class="font-mono text-[13px] tracking-[0.04em] text-ink-soft">{cert.year}</span>
					<div class="flex items-center gap-[20px]">
						{#if cert.badge}
							<img src={cert.badge} alt={cert.name} class="h-[56px] w-[56px] shrink-0 object-contain" />
						{/if}
						<div>
							<div class="font-display font-semibold text-[clamp(19px,2.2vw,24px)]">{cert.name}</div>
							<div class="mt-[3px] text-[16px] text-ink-soft">{cert.issuer}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============ CONTACT ============ -->
<section
	class="relative border-t border-hair-2 py-[clamp(80px,13vw,170px)] text-center"
	id="contact"
>
	<div class="wrap">
		<span class="label text-ink-soft">05 — Contact</span>
		<h2 class="mt-[18px] text-[clamp(36px,7vw,84px)] tracking-[-0.03em]">
			Let's build something
			<span class="sig"
				>great<svg
					viewBox="0 0 200 22"
					preserveAspectRatio="none"
					fill="none"
					stroke="currentColor"
					stroke-width="7"
					stroke-linecap="round"><path d="M6 13 Q55 18 100 11 T194 13" /></svg
				></span
			>.
		</h2>
		<p class="mx-auto mt-6 max-w-[46ch] text-[19px] text-ink-soft">
			Have a product to build, a team to strengthen, or an idea worth prototyping? My inbox is open.
		</p>
		<div class="mt-[clamp(36px,5vw,52px)]">
			<a
				class="border-b-2 border-accent pb-1 font-display font-semibold no-underline text-[clamp(22px,3vw,34px)]"
				href="mailto:hey@josephheinz.com">hey@josephheinz.com</a
			>
		</div>
		<div class="mt-[clamp(42px,6vw,64px)] flex flex-wrap justify-center gap-[30px]">
			{#each [
				{ href: 'https://github.com/josephheinz', label: 'GitHub' },
				{ href: 'https://linkedin.com/in/josephheinz', label: 'LinkedIn' },
				{ href: 'https://josephheinz.itch.io', label: 'itch.io' },
				{ href: 'https://bsky.app/profile/josephheinz.com', label: 'Bluesky' }
			] as link}
				<a
					class="border-b border-transparent pb-[2px] text-[15px] text-ink-soft no-underline transition-colors duration-[180ms] hover:border-accent hover:text-ink"
					href={link.href}
					target="_blank"
					rel="noopener">{link.label}</a
				>
			{/each}
		</div>
	</div>
</section>

<footer class="border-t border-hair-2">
	<div class="wrap flex flex-wrap justify-between gap-5 py-[34px]">
		<span class="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">© 2026 Joseph Heinz</span>
		<span class="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">Fullstack developer</span>
	</div>
</footer>
