import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";

export const GET = (requestEvent: any) => {
    const { params } = requestEvent;
    const { commentId } = params;
    const comment = comments.find((comment: { id: string, text: string }) => comment.id == commentId);
    
    return json(comment);
}

export const PATCH = async (requestEvent: any) => {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();
    const comment = comments.find((comment: { id: string, text: string }) => comment.id == commentId);
    comment.text = text;

    return json(comment);
}