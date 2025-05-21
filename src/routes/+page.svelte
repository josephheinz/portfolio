
<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Navlink from "$lib/components/Navlink.svelte";
    import Pfp from "$lib/components/Pfp.svelte";
    import NameMarquee from "$lib/components/NameMarquee.svelte";
</script>

<Navbar>
    <Navlink href="#">asdf</Navlink>
</Navbar>

<!-- Hero section -->
<main class="flex justify-center items-center">
    <Pfp/>
    <NameMarquee/>
</main>