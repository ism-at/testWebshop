<script>
    import Button from "../lib/components/Button.svelte";
    //import Header from "../lib/components/Header.svelte"; I CREATE +layout.svelt for DRY
    //import Footer from "../lib/components/Footer.svelte";
</script>

<Header />

<h1 class="text-red-500 text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<br/>
<!-- Render hhee component -->
<Button buttonText="Click me!"/>
<Button buttonText="Check me!"/>

<Footer />