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
	<Navlink href="#stack">Skills</Navlink>
	<Navlink href="#projects">Projects</Navlink>
	<Navlink href="#certs">Cerfifications</Navlink>
	<Navlink href="#about">About</Navlink>
</Navbar>

<!-- Hero section -->
<main class="flex h-min items-center justify-center px-40 py-16">
	<Pfp />
	<VerticalDivider />
	<div class="flex h-full grow flex-col items-end justify-start text-right">
		<h1 class="text-h1 font-black">I'm Joseph</h1>
		<h2 class="text-h4 font-semibold text-stone-500">A web developer from Michigan</h2>
		<div class="h-[100px]"></div>
		<div class="flex gap-6 px-2 py-3">
			<Button className="text-h6" type="link" href="#projects">My Work</Button>
			<Button className="text-h6" variant="secondary" type="link" href="#about">About Me</Button>
		</div>
		<div class="h-[100px]"></div>
	</div>
</main>
<NameMarquee />
<!-- About me -->
<div class="flex h-min flex-col items-end justify-start px-40 py-16" id="about">
	<h1 class="text-h1 font-black">About Me</h1>
	<p class="text-para max-w-[500px] text-right">
		I'm a full stack developer from Michigan, who specializes in front end web development. In my
		free time I enjoy making websites, developing video games, going to the gym, and hanging out
		with my friends. I've been self taught in programming for half a decade and have been interested
		in computers for much longer than that.
	</p>
</div>
<SquiggleSpacer />
<!-- Projects -->
<div class="flex h-min flex-col items-start justify-start px-40 py-16" id="projects">
	<h1 class="text-h1 font-black">Projects</h1>
	<div class="grid w-full grid-cols-3 gap-4 p-6">
		<ProjectCard
			technologies={['nodejs', 'docker', 'svelte', 'nginx', 'tailwindcss']}
			links={['https://github.com/josephheinz/Livestream-Website']}
			><!-- svelte-ignore a11y_img_redundant_alt --><img
				slot="thumbnail"
				src="josephheinzlive.png"
				alt="JosephHeinz.live meta image"
			/>
			<h1 slot="title">JosephHeinz.Live</h1>
			<p slot="description">
				A livestream site I created that uses my own RTMP server so I can stream directly to my own
				website instead of running my livestream through an existing service such as Twitch or
				YouTube.
			</p>
		</ProjectCard>
		<ProjectCard
			technologies={['godot']}
			links={['Cryptkeep/Final Project Godot.html', 'https://github.com/josephheinz/final-project-godot']}
			><img slot="thumbnail" src="Cryptkeep/ss.png" alt="Screenshot of Cryptkeep" />
			<h1 slot="title">Cryptkeep</h1>
			<p slot="description">
				A game I made for my software development class using the Godot game engine. It is a
				roguelike dungeon crawler deckbuilder that takes heavy inspiration from Slay the Spire. All
				the systems and assets are bespoke, made by me.
			</p>
		</ProjectCard>
		<ProjectCard
			technologies={['svelte', 'tailwindcss']}
			links={['https://github.com/josephheinz/portfolio']}
			><img slot="thumbnail" src="portfolio.png" alt="Screenshot of my portfolio" />
			<h1 slot="title">Portfolio</h1>
			<p slot="description">
				A personal portfolio website made using Svelte and TailwindCSS. It displays my projects and
				experience.
			</p>
		</ProjectCard>
	</div>
</div>
<SquiggleSpacer />
<!-- Certifications -->
<div class="flex h-min flex-col items-end justify-start px-40 py-16" id="certs">
	<h1 class="text-h1 font-black">Certifications</h1>
	<div class="grid w-full grid-cols-4 gap-4 p-6">
		<img src="certs/unity-programmer.png" alt="Unity programmer certificate" />
		<img src="certs/it-specialist-html-and-css.png" alt="HTML and CSS certificate" />
		<img src="certs/ITS-Badges_JavaScript_1200px.png" alt="JavaScript certificate" />
		<img src="certs/ITS-Badges_Python_1200px.png" alt="Python certificate" />
		<img src="certs/comptia-itf.png" alt="Comptia IT Fundamentals certificate" />
	</div>
</div>
<SquiggleSpacer />
<!-- Tech Stack -->
<div class="flex h-min flex-col items-start justify-start px-40 py-16" id="stack">
	<h1 class="text-h1 font-black">Tech Stack</h1>
	<div class="grid w-full grid-cols-6 gap-6 p-8">
		<!-- The keys of the tech stack dict are used in the devicons -->
		{#each Object.keys(TechStack) as techKey}
			<Tech tech={techKey} name={TechStack[techKey]} />
		{/each}
	</div>
</div>
