export const load = async () => {
    console.log("Home page universal load function called");
}

export const prerender = true;
export const csr = false; // As the default "load" function will be called when we use csr, so that we need to set "csr" to be false in order to make sure that prerender is working well