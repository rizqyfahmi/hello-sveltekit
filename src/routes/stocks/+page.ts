export const load = async ({ fetch }) => {
    const response = await fetch("http://localhost:4000/stocks");
    const stocks = await response.json();

    return { stocks }
}