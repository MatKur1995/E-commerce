
export interface addCommentsTypes {
  content: string;
}

interface User {
  id: number;
  username: string;
}

interface Comment {
  id: number;
  content: string;
  user: User;
}

interface Reply {
  id: number;
  content: string;
  user: User;
  comment: Comment
}

export interface CommentReply {
  id: number;
  content: string;
  user: User;
  // comment: Comment; // Jeśli ta linia istnieje, musi być dostarczona, jeśli nie - usuń ją.
}

export interface CommentsRepliesDeleteProps {
  reply: CommentReply; // Zakładam, że masz zdefiniowany typ CommentReply
}

export interface EditCommentProps {
  comment: Comment;
}

export interface EditReplyProps {
  reply: CommentReply;
}

export interface ReplyCommentProps {
  comment: Comment;
}

export interface EditingCommentState {
  content: string;
}

export interface EditingReplyState {
  content: string;
}

export interface ReplyCommentState {
  content: string;
}
