import { error } from '@sveltejs/kit';
import { getProjectContent } from '$lib/projects';
import { marked } from 'marked';

export async function load({ params }) {
	const project = getProjectContent(params.slug);
	if (!project) error(404, 'Project not found');
	const html = await marked(project.content);
	return { meta: project.meta, html };
}
