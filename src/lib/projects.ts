import matter from 'gray-matter';

export interface ProjectMeta {
	n: string;
	title: string;
	kind: string;
	initials: string;
	blurb: string;
	tags: string;
	cover?: string;
	video?: string;
	slug: string;
}

const raw = import.meta.glob('./projects/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export function getAllProjects(): ProjectMeta[] {
	return Object.entries(raw)
		.map(([path, content]) => {
			const slug = path.replace('./projects/', '').replace('.md', '');
			const { data } = matter(content);
			return { ...(data as Omit<ProjectMeta, 'slug'>), slug };
		})
		.sort((a, b) => String(a.n).localeCompare(String(b.n)));
}

export function getProjectContent(slug: string): { meta: ProjectMeta; content: string } | null {
	const key = Object.keys(raw).find((k) => k.endsWith(`${slug}.md`));
	if (!key) return null;
	const { data, content } = matter(raw[key]);
	return { meta: { ...(data as Omit<ProjectMeta, 'slug'>), slug }, content };
}
