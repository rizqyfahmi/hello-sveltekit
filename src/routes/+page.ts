export const load = async ({ fetch }) => {
    console.log("Home page universal load function called");
    const response = await fetch("/api/current-time");
    const currentTime = await response.text();
    return { currentTime };
}

// When a page set prerender to true than automatically makes the API route prerender set to true
export const prerender = true;
export const csr = false; // As the default "load" function will be called when we use csr, so that we need to set "csr" to be false in order to make sure that prerender is working well