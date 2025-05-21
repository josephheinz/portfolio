<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		const maskGroup = document.querySelector('#maskGroup');
		if (maskGroup) {
			gsap.to(maskGroup, {
				rotation: 360,
				transformOrigin: '250px 250px', // center of your 500x500 mask coords
				duration: 30,
				repeat: -1,
				ease: 'linear'
			});
		} else {
			console.error('maskGroup not found');
		}
	});
</script>

<!-- Keep the SVG visible but visually hidden -->
<svg
	width="500"
	height="500"
	style="position: absolute; width: 0; height: 0; overflow: visible;"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<mask
			id="starMask"
			maskUnits="userSpaceOnUse"
			maskContentUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="500"
			height="500"
		>
			<g id="maskGroup" transform="translate(0,0)">
				<path
					d="M251.541 -0.243988L301.233 59.8214L374.303 32.6496L376.568 31.8068L376.972 34.1906L389.974 111.056L466.84 124.059L469.224 124.462L468.381 126.728L441.208 199.796L501.274 249.489L503.138 251.03L501.274 252.571L441.208 302.264L468.381 375.333L469.224 377.599L466.84 378.002L389.974 391.004L376.972 467.87L376.568 470.254L374.303 469.411L301.233 442.238L251.541 502.305L250 504.168L248.459 502.305L198.766 442.238L125.697 469.411L123.432 470.254L123.028 467.87L110.025 391.004L33.1602 378.002L30.7764 377.599L31.6191 375.333L58.791 302.264L-1.27441 252.571L-3.1377 251.03L-1.27441 249.489L58.791 199.796L31.6191 126.728L30.7764 124.462L33.1602 124.059L110.025 111.056L123.028 34.1906L123.432 31.8068L125.697 32.6496L198.766 59.8214L248.459 -0.243988L250 -2.10727L251.541 -0.243988Z"
					fill="white"
				/>
			</g>
		</mask>
	</defs>
</svg>

<!-- The masked container -->
<div
	style="
		width: 500px;
		height: 500px;
		-webkit-mask: url(#starMask);
		mask: url(#starMask);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: contain;
		mask-size: contain;
		background: repeating-linear-gradient(
            135deg,
            magenta,
            magenta 20px,
            purple 20px,
            purple 40px
        );
		overflow: hidden;
		position: relative;
	"
>
	<img
		src="headshot.png"
		alt=""
		style="
			position: absolute;
			top: 15%;
			left: 5%;
			width: 130%;
			height: 130%;
			object-fit: cover;
		"
	/>
</div>
