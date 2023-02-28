import { json } from "@sveltejs/kit"
import { comments } from "$lib/comments"

export const GET = () => {
    return json(comments)
}