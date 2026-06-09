import { getAllProjects } from '$lib/projects';

export function load() {
	return { projects: getAllProjects() };
}
