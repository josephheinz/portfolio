<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	onMount(() => {
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		gsap.to('textPath', {
			attr: {
				startOffset: function (index) {
					return -17.5 + index * 17.5 + '%';
				}
			},
			scrollTrigger: {
				trigger: '#curve',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			duration: 10,
			ease: 'linear'
		});
	});
</script>

<svg
	viewBox="0 0 1866 139"
	width="105%"
	height="105%"
	preserveAspectRatio="none"
	class="my-45"
	style="margin-left: -10px; margin-right: -10px; overflow: visible"
>
	<svg
		width="1866"
		height="139"
		viewBox="0 0 1866 139"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 66.4647C535.494 19.3744 644.695 21.6633 876.684 66.4647C1108.67 111.266 1609.96 129.032 1889 66.4647"
			stroke="#7CFF6B"
			stroke-width="75"
			id="curve"
		/>
		<text fill="black" text-anchor="middle" class="text-h4 font-extrabold uppercase">
			{#each array as i}
				<textPath class="textPath font-extrabold" href="#curve" startOffset={`${i * 17.5}%`}>
					Joseph Heinz
				</textPath>
			{/each}
		</text>
	</svg>
</svg>

<style>
	textPath {
		dominant-baseline: middle;
	}
</style>
