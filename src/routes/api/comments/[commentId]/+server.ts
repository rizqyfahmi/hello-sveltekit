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

export const DELETE = (requestEvent: any) => {
    const { params } = requestEvent;
    const { commentId } = params;
    const deletedComment = comments.find((comment: { id: string, text: string }) => comment.id == commentId);
    const index = comments.findIndex((comment: { id: string, text: string }) => comment.id == commentId);
    comments.splice(index, 1)

    return json(deletedComment);
}