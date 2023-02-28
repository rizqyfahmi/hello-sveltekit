<script lang="ts">
    import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

    const onClick = () => {
        // replaceState is used to replace the current history state instead of adding a new url on the stack
        goto("/products", { replaceState: true })
    }

    // it used to get previous navigation route information when we moved to new route
    beforeNavigate((navigation: any) => {
        console.log({ before: navigation });    
    })

    // it used to get next navigation route information when we click back button in the browser
    afterNavigate((navigation: any) => {
        console.log({ after: navigation });
    })
</script>

<h1>Welcome home!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={onClick}>Place Order</button>