import React from "react";
import axios from "axios";
import {CommentsRepliesDeleteProps} from "../../../../../types/addComments.types";


export const CommentsRepliesDelete: React.FC<CommentsRepliesDeleteProps> = ({ reply }) => {

    const deleteReply = async () => {
        let replyId = reply.id
        const url = `http://localhost:5000/comments-replies/delete/${replyId}`;
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        try {
            const response = await axios.delete(url, config);
            console.log(response);
        } catch (error) {
            console.error('Error deleting the comment:', error);
        }
    };

    return (
        <>
            <button onClick={deleteReply} className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
            </button>
        </>
    );
};