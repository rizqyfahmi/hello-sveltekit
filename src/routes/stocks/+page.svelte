<script lang="ts">
	import { invalidate } from '$app/navigation';

    export let data;
    
    const refresh = () => {
        // Make sure label you pass here is equals to label you pass in load function
        invalidate("stocks:actively-trading")
    }
</script>

<h1>Actively trading stocks</h1>

{#each data.stocks as stock}
    <h2>{ stock.symbol } - ${ stock.price }</h2>
{/each}

<button on:click={refresh}>Refresh</button>