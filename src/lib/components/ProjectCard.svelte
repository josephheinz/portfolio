<script>
    const { technologies } = $props();
</script>

<div
	class="shadow-custom m-8 flex flex-col items-center justify-stretch gap-8 rounded-lg border-4 border-zinc-950 bg-amber-200 p-4"
>
	<div
		class="shadow-custom aspect-video max-w-full overflow-hidden rounded-lg border-4 border-zinc-950"
	>
		<slot name="thumbnail" />
	</div>
	<h1 class="text-h4 font-bold">
		<slot name="title" />
	</h1>
    <span class="text-para max-w-[350px] text-center">
        <slot name="description" />
    </span>
    <div class="w-full flex items-center justify-center gap-1">
        {#each technologies as tech}
            <i class={`devicon-${tech}-plain colored`}></i>
        {/each}
    </div>  
</div>
