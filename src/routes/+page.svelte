<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import NameMarquee from '$lib/components/NameMarquee.svelte';
	import VerticalDivider from '$lib/components/VerticalDivider.svelte';
	import Button from '$lib/components/Button.svelte';
	import SquiggleSpacer from '$lib/components/SquiggleSpacer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Tech from '$lib/components/Tech.svelte';
	const TechStack = {
		html5: 'HTML5',
		javascript: 'JavaScript',
		css3: 'CSS',
		svelte: 'Svelte',
		typescript: 'TypeScript',
		nodejs: 'Node.js',
		docker: 'Docker',
		nginx: 'Nginx',
		csharp: 'C#',
		python: 'Python',
		supabase: 'Supabase',
		git: 'Git'
	};
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
	<div class="grid w-full grid-cols-3 gap-4 p-6">
		<!-- svelte-ignore a11y_missing_attribute -->
		<ProjectCard
			technologies={['nodejs', 'docker', 'svelte', 'nginx', 'tailwindcss']}
			links={['https://github.com/josephheinz/Livestream-Website']}
			><img slot="thumbnail" src="josephheinzlive.png" />
			<h1 slot="title">JosephHeinz.Live</h1>
			<p slot="description">
				A livestream site I created that uses my own RTMP server so I can stream directly to my own
				website instead of running my livestream through an existing service such as Twitch or
				YouTube.
			</p>
		</ProjectCard>
		<ProjectCard
			technologies={['unity', 'csharp']}
			links={['https://github.com/josephheinz/Acceptance-Day-Demo-Project/tree/main']}
			><img slot="thumbnail" src="unityassets.png" />
			<h1 slot="title">Unity Platformer Assets</h1>
			<p slot="description">
				A standalone package of assets I made for my programming class using Unity. It is licensed
				under the MIT license, and free to use for any purpose.
			</p>
		</ProjectCard>
		<ProjectCard
			technologies={['svelte', 'tailwindcss']}
			links={['https://github.com/josephheinz/portfolio']}
			><img slot="thumbnail" src="portfolio.png" />
			<h1 slot="title">Portfolio</h1>
			<p slot="description">
				A personal portfolio website made using Svelte and TailwindCSS. It displays my projects and
				experience.
			</p>
		</ProjectCard>
	</div>
</div>
<SquiggleSpacer />
<div class="flex h-min flex-col items-end justify-start px-40 py-16">
	<h1 class="text-h1 font-black">Certifications</h1>
	<div class="grid w-full grid-cols-4 gap-4 p-6">
		<img src="certs/unity-programmer.png" />
		<img src="certs/it-specialist-html-and-css.png" />
		<img src="certs/ITS-Badges_JavaScript_1200px.png" />
		<img src="certs/ITS-Badges_Python_1200px.png" />
		<img src="certs/comptia-itf.png" />
	</div>
</div>
<SquiggleSpacer />
<div class="flex h-min flex-col items-start justify-start px-40 py-16">
	<h1 class="text-h1 font-black">Tech Stack</h1>
	<div class="grid w-full grid-cols-6 gap-6 p-8">
		{#each Object.keys(TechStack) as techKey}
			<Tech tech={techKey} name={TechStack[techKey]} />
		{/each}
	</div>
</div>
