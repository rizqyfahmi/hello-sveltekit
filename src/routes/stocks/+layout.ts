export const load = async ({ fetch }) => {
    const mostActiveStockResponse = await fetch("http://localhost:4000/most-active-stock");
    const topGainingStockResponse = await fetch("http://localhost:4000/top-gaining-stock");
    const topLosingStockResponse = await fetch("http://localhost:4000/top-losing-stock");

    return {
        mostActiveStock: mostActiveStockResponse.json(),
        topGainingStock: topGainingStockResponse.json(),
        topLosingStock: topLosingStockResponse.json()
    }
}