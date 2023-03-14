<script lang="ts">
	import { invalidateAll } from '$app/navigation';

    export let data;
    
    const refresh = () => {
        // Invalidate all changed data in exposed components
        invalidateAll()
    }
</script>

<h1>Actively trading stocks</h1>

{#each data.stocks as stock}
    <h2>{ stock.symbol } - ${ stock.price }</h2>
{/each}

<button on:click={refresh}>Refresh</button>