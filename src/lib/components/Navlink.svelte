<script>
    const { children, href = "" } = $props();
</script>

<li class="uppercase text-h6">
    <a {href}>{@render children?.()}</a>
</li>