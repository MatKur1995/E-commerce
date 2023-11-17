import React, { useState, ChangeEvent } from 'react';
import { EditCommentProps, EditingCommentState } from "../../../../types/addComments.types"
import axios from "axios";
import "./EditComment.css"

export const EditComment: React.FC<EditCommentProps> = ({ comment }) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [editingComment, setEditingComment] = useState<EditingCommentState>({ content: comment.content });

    const openEditModal = () => {
        setEditModalOpen(true);
    };

    console.log(comment)
    const handleEditCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setEditingComment({ ...editingComment, content: e.target.value });
    };

    const handleUpdateComment: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();

        const url = `http://localhost:5000/comments/edit/${comment.id}`;
        const data = {
            content: editingComment.content, // Dane do wysłania
        };
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Nagłówek z tokenem JWT
            },
        };
        try {
            const response = await axios.patch(url, data, config); // Wyślij poprawne dane i konfigurację
            console.log(response);
        } catch (error) {
            console.error('Error updating the comment:', error);
        }
    };


    return (
        <>
            <button onClick={openEditModal} className="comment-reply">
                <i className="fa-regular fa-pen-to-square"></i> Edit
            </button>

            {isEditModalOpen && (
                <div className="modal">
                    <div className="modal-content">
            <textarea
                value={editingComment.content}
                onChange={handleEditCommentChange}
            />
                        <div className="edit-comment-buttons">
                            <button className="edit-confirm" onClick={handleUpdateComment}>Update</button>
                            <button className="edit-close" onClick={() => setEditModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
