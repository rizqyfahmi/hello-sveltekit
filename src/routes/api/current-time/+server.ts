export const GET = async () => {
    console.log("currrent-time GET handler invoked");
    return new Response(new Date().toLocaleTimeString())
}

export const prerender = true;