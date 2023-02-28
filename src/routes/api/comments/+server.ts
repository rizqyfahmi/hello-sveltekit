import { comments } from "$lib/comments"

export const GET = () => {
    return new Response(
        JSON.stringify(comments),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}