<script>
	import { cn } from '$lib/utils';
	import { cva } from 'cva';

	const {
		children,
		onclick = () => {},
		variant = 'default' || 'secondary' || 'disabled' || 'neutral',
		size = 'default' || 'sm' || 'lg',
		className = ''
	} = $props();

	const buttonVariants = cva(
		'shadow-custom text-para pointer-cursor inline-flex items-center justify-center rounded-lg border-4 border-zinc-950 bg-pink-400 px-4 py-2 font-normal transition-all hover:shadow-none',
		{
			variants: {
				variant: {
					default: 'bg-pink-400 text-zinc-950',
					secondary: 'bg-blue-400 text-zinc-950',
					neutral: 'bg-amber-100 text-zinc-950',
					disabled: 'bg-zinc-100 text-zinc-950 shadow-none'
				}
			},
			size: {
				default: 'px-4 py-2',
				sm: 'px-2 py-1',
				lg: 'px-6 py-3'
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);
</script>

<button
	class={cn(buttonVariants({ variant, size, className }))}
	{onclick}
	disabled={variant === 'disabled'}
>
	{@render children?.()}
</button>
