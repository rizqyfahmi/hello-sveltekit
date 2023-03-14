<script>

	import { goto, preloadCode } from "$app/navigation";

</script>
<h1 class="tall">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- As the default when we click the link below, in the next page will scroll to the top. Using "data-sveltekit-noscroll", We can prevent it -->
<a href="/products" data-sveltekit-noscroll>Products</a>
<button 
on:focus={async () => {
    await preloadCode("/products");
}}
on:mouseover={async () => {
    await preloadCode("/products");
}}
on:click={() => goto("/products")}>Go to products</button>
<style>
    .tall {
        height: 100vh;
    }
</style>