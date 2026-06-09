import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

interface FlyAndScaleParams {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
}

export function flyAndScale(
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (
		valueA: number,
		scaleA: [number, number],
		scaleB: [number, number]
	): number => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;
		return ((valueA - minA) / (maxA - minA)) * (maxB - minB) + minB;
	};

	const styleToString = (s: Record<string, string | undefined>): string =>
		Object.entries(s)
			.filter(([, v]) => v !== undefined)
			.map(([k, v]) => `${k}:${v}`)
			.join(';');

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: String(t)
			});
		},
		easing: cubicOut
	};
}

export function tooltip(node: HTMLElement, params: string): { onDestroy(): void } {
	node.classList.add('tooltip');
	node.setAttribute('tabindex', '0');

	function handleFocus(): void {
		const child = document.createElement('span');
		child.textContent = params;
		child.setAttribute('id', 'tooltip');
		child.setAttribute(
			'class',
			'absolute left-1/2 -top-full -translate-x-1/2 -translate-y-4 rounded-md bg-zinc-950 py-2 px-4 text-sm text-white opacity-80'
		);
		node.appendChild(child);
		node.addEventListener('mouseleave', handleBlur);
		node.addEventListener('blur', handleBlur);
		node.removeEventListener('mouseenter', handleFocus);
		node.removeEventListener('focus', handleFocus);
	}

	function handleBlur(): void {
		const tip = node.querySelector('#tooltip');
		if (tip) node.removeChild(tip);
		node.removeEventListener('mouseleave', handleBlur);
		node.removeEventListener('blur', handleBlur);
		node.addEventListener('mouseenter', handleFocus);
		node.addEventListener('focus', handleFocus);
	}

	node.addEventListener('mouseenter', handleFocus);
	node.addEventListener('focus', handleFocus);

	return {
		onDestroy() {
			node.classList.remove('tooltip');
			node.removeEventListener('mouseenter', handleFocus);
			node.removeEventListener('focus', handleFocus);
		}
	};
}
