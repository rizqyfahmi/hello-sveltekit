import Product from './product.svelte';

export const load = async ({ 
    data // This comes from the return data of page.server.ts
}) => {
    console.log('universal load function called');
    const notification = 'End of season sale!';
    // Universal load function can return component, wbile server load function can't do that
    return { ...data, notification, Component: Product };
};

export const ssr = true;
export const csr = false;