import React, {ChangeEvent, useState} from "react";
import {
    CommentsRepliesDeleteProps,
    EditingCommentState,
    EditingReplyState
} from "../../../../../types/addComments.types";
import axios from "axios";


export const CommentsRepliesEdit: React.FC<CommentsRepliesDeleteProps> = ({ reply }) => {

    const [isEditReplyModalOpen, setEditReplyModalOpen] = useState(false);
    const [editingReply, setEditingReply] = useState<EditingReplyState>({ content: reply.content });

    const openEditReplyModal = () => {
        setEditReplyModalOpen(true);
    };

    const handleEditCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setEditingReply({ ...editingReply, content: e.target.value });
    };

    const handleUpdateReply: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();

        const url = `http://localhost:5000/comments-replies/edit-reply/${reply.id}`;
        const data = {
            content: editingReply.content, // Dane do wysłania
        };
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Nagłówek z tokenem JWT
            },
        };
        try {
            const response = await axios.patch(url, data, config); // Wyślij poprawne dane i konfigurację
            if (response.status === 200) {
                setEditReplyModalOpen(false)
            }
        } catch (error) {
            console.error('Error updating the comment:', error);
        }
    };



    return (
        <>
            <button onClick={openEditReplyModal} className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
            </button>

            {isEditReplyModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Edit reply</h3>
            <textarea
                value={editingReply.content}
                onChange={handleEditCommentChange}
            />
                        <div className="edit-comment-buttons">
                            <button className="edit-confirm" onClick={handleUpdateReply}>Update</button>
                            <button className="edit-close" onClick={() => setEditReplyModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};