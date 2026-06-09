export interface Project {
	n: string;
	title: string;
	kind: string;
	initials: string;
	blurb: string;
	tags: string;
	href: string;
}

export interface Experience {
	years: string;
	role: string;
	company: string;
}

export const PROJECTS: Project[] = [
	{
		n: '01',
		title: 'Ledgerly',
		kind: 'Web App',
		initials: 'LG',
		blurb: 'Real-time fintech dashboard for small studios — invoicing, forecasting, and fast reconciliation.',
		tags: 'React · Node · Postgres',
		href: '#work'
	},
	{
		n: '02',
		title: 'Bloom CMS',
		kind: 'Platform',
		initials: 'BL',
		blurb: 'A headless content platform with a block editor authors actually enjoy.',
		tags: 'Next.js · Go · WebSockets',
		href: '#work'
	},
	{
		n: '03',
		title: 'Routeful',
		kind: 'Web App',
		initials: 'RT',
		blurb: 'Logistics route optimizer that trims fleet mileage by ~18% behind a friendly map UI.',
		tags: 'Python · React · Mapbox',
		href: '#work'
	},
	{
		n: '04',
		title: 'Chip & Chime',
		kind: 'Open Source',
		initials: 'CC',
		blurb: 'An accessible component kit with 2.1k stars — docs, tokens, and Storybook are mine.',
		tags: 'TypeScript · Storybook · a11y',
		href: '#work'
	},
	{
		n: '05',
		title: 'Pixel Drifter',
		kind: 'Game · side project',
		initials: 'PD',
		blurb: 'A browser roguelike with procedurally-stitched dungeons and a hand-tuned combat feel.',
		tags: 'TypeScript · Canvas · WebAudio',
		href: '#work'
	},
	{
		n: '06',
		title: 'Synthwave Runner',
		kind: 'Game · side project',
		initials: 'SR',
		blurb: 'Mobile endless runner shipped to 120k+ installs — gameplay, shaders, and live-ops.',
		tags: 'Unity · C# · Shaders',
		href: '#work'
	}
];

export const EXPERIENCE: Experience[] = [
	{
		years: '2023 — Now',
		role: 'Senior Fullstack Engineer',
		company: 'Northwind Labs'
	},
	{
		years: '2020 — 2023',
		role: 'Fullstack Developer',
		company: 'Tidepool Studio'
	},
	{
		years: '2018 — Now',
		role: 'Game Dev — nights & weekends',
		company: 'Personal projects'
	},
	{
		years: '2018 — 2020',
		role: 'Junior Developer',
		company: 'Brightseed'
	}
];
