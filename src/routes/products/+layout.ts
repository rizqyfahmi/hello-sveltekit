export const load = async ({ fetch, parent }) => {
    const { username } = await parent();
    const title = "Featured products";
    const response = await fetch("http://localhost:4000/featured-products");
    const featuredProducts = await response.json();
    const notification = "End of season sale!"
    
    return {
        title,
        featuredProducts,
        username,
        notification
    }
}