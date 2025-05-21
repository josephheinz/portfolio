<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.to('#text', {
			attr: { startOffset: '100%' },
			duration: 10,
			ease: 'linear',
			repeat: -1
		});
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
	<defs>
		<path id="path" d="M50 200 C150 50 250 350 400 200 C550 50 650 350 750 200" fill="none" />
	</defs>
	<text fill="#fff" font-size="32" font-family="sans-serif" font-weight="bold">
		<textPath id="text" xlink:href="#path" startOffset="0%">
			JOSEPH HEINZ&nbsp;&nbsp;&nbsp; JOSEPH HEINZ&nbsp;&nbsp;&nbsp; JOSEPH HEINZ&nbsp;&nbsp;&nbsp;
			JOSEPH HEINZ&nbsp;&nbsp;&nbsp; JOSEPH HEINZ&nbsp;&nbsp;&nbsp;
		</textPath>
	</text>
</svg>