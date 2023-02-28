<script lang="ts">
    import { goto } from "$app/navigation";

    const onClick = () => {
        // replaceState is used to replace the current history state instead of adding a new url on the stack
        goto("/products", { replaceState: true })
    }
</script>

<h1>Welcome home!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={onClick}>Place Order</button>