<script lang="ts">
	import { invalidate } from '$app/navigation';

    export let data;
    
    const refresh = () => {
        // Make sure URL you pass here is equals to URL you pass in load function
        invalidate("http://localhost:4000/stocks")
    }
</script>

<h1>Actively trading stocks</h1>

{#each data.stocks as stock}
    <h2>{ stock.symbol } - ${ stock.price }</h2>
{/each}

<button on:click={refresh}>Refresh</button>