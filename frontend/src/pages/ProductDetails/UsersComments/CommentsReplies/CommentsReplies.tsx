import "./CommentsReplies.css";
import React, { ChangeEvent, useState } from 'react';
import {ReplyCommentProps, ReplyCommentState } from '../../../../types/addComments.types';
import axios from 'axios';

export const CommentsReplies: React.FC<ReplyCommentProps> = ({ comment }) => {

  const [isReplyModalOpen, setReplyModalOpen] = useState(false);
  const [replyComment, setReplyComment] = useState<ReplyCommentState>({ content: '' });

  const openEditModal = () => {
    setReplyModalOpen(true);
  };

  const handleReplyCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyComment({ ...replyComment, content: e.target.value });
  };


  const handleUpdateComment: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    const url = `http://localhost:5000/comments-replies/add-reply/${comment.id}`;
    const data = {
      content: replyComment.content, // Dane do wysłania
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Nagłówek z tokenem JWT
      },
    };
    try {
      const response = await axios.post(url, data, config); // Wyślij poprawne dane i konfigurację
      console.log(response);
    } catch (error) {
      console.error('Error updating the comment:', error);
    }
  };


  return (
    <>
      <button onClick={() => {setReplyModalOpen(true)}} className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
      {isReplyModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <textarea
              name="content"
              value={replyComment.content}
              onChange={handleReplyCommentChange}
            />
            <div className="edit-comment-buttons">
              <button className="edit-confirm" onClick={handleUpdateComment}>Update</button>
              <button className="edit-close" onClick={() => setReplyModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};