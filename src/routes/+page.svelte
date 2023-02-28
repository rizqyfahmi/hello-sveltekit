<script lang="ts">
    import { goto } from "$app/navigation";

    const onClick = () => {
        goto("/products")
    }
</script>

<h1>Welcome home!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={onClick}>Place Order</button>