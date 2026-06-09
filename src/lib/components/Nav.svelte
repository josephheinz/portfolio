<script lang="ts">
	import { onMount } from 'svelte';

	let activeSection = $state('');
	const sections = ['work', 'about', 'experience', 'contact'];

	onMount(() => {
		const els = sections
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);
		if (!els.length) return;

		const obs = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeSection = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);

		for (const el of els) obs.observe(el);
		return () => obs.disconnect();
	});
</script>

<nav class="nav-backdrop sticky top-0 z-50 border-b border-hair-2">
	<div class="wrap flex items-center justify-between gap-5 py-5">
		<a class="font-display font-semibold text-[18px] tracking-[-0.01em] no-underline" href="#top">
			Joseph Heinz<span class="text-accent">.</span>
		</a>
		<div class="flex items-center gap-[34px] max-[720px]:gap-5">
			<a class="nav-link max-[720px]:hidden" class:is-active={activeSection === 'work'} href="#work"
				>Work</a
			>
			<a
				class="nav-link max-[720px]:hidden"
				class:is-active={activeSection === 'about'}
				href="#about">About</a
			>
			<a
				class="nav-link max-[720px]:hidden"
				class:is-active={activeSection === 'experience'}
				href="#experience">Experience</a
			>
			<a class="nav-link" class:is-active={activeSection === 'contact'} href="#contact">Contact</a>
		</div>
	</div>
</nav>
