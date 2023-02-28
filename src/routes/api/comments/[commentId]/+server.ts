import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";

export const GET = (requestEvent: any) => {
    const { params } = requestEvent;
    const { commentId } = params;
    console.log("Hello ", commentId);
    
    const comment = comments.find((comment: { id: string, text: string }) => comment.id == commentId);
    
    return json(comment);
}