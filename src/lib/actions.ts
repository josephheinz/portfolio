import type { Action } from 'svelte/action';

export const reveal: Action = (node) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('is-in');
				observer.unobserve(node);
			}
		},
		{ threshold: 0.1 }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
		}
	};
};
