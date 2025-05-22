<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import NameMarquee from '$lib/components/NameMarquee.svelte';
	import VerticalDivider from '$lib/components/VerticalDivider.svelte';
	import Button from '$lib/components/Button.svelte';
	import SquiggleSpacer from '$lib/components/SquiggleSpacer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<Navbar>
	<Navlink href="#">Home</Navlink>
	<Navlink href="#">Projects</Navlink>
	<Navlink href="#">Cerfifications</Navlink>
	<Navlink href="#">About</Navlink>
</Navbar>

<!-- Hero section -->
<main class="flex h-min items-center justify-center px-40 py-16">
	<Pfp />
	<VerticalDivider />
	<div class="flex h-full grow flex-col items-end justify-start text-right">
		<h1 class="text-h1 font-black">I'm Joseph</h1>
		<h2 class="text-h4 font-semibold text-stone-500">A web developer from Michigan</h2>
		<div class="h-[100px]"></div>
		<h3 class="text-h3 font-bold text-stone-700">Something</h3>
		<div class="flex gap-6 px-2 py-3">
			<Button className="text-h6">My Work</Button>
			<Button className="text-h6" variant="secondary">About Me</Button>
		</div>
	</div>
</main>
<NameMarquee />
<!-- About me -->
<div class="flex h-min flex-col items-end justify-start px-40 py-16">
	<h1 class="text-h1 font-black">About Me</h1>
</div>
<SquiggleSpacer />
<div class="flex h-min flex-col items-start justify-start px-40 py-16">
	<h1 class="text-h1 font-black">Projects</h1>
	<div class="grid w-full grid-cols-3 gap-12 p-6">
		<!-- svelte-ignore a11y_missing_attribute -->
		<ProjectCard technologies={['html', 'css', 'js']}
			><img slot="thumbnail" src="headshot.png" />
			<h1 slot="title">Project 1</h1>
			<p slot="description">
				A livestream site I created that uses my own RTMP server so I can stream directly to my own
				website instead of running my livestream through an existing service such as Twitch or
				YouTube.
			</p>
		</ProjectCard>
	</div>
</div>
