
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

interface CommentReply {
  id: number;
  content: string;
  user: User;
  comment: Comment;
}

export interface EditCommentProps {
  comment: Comment;
}

export interface ReplyCommentProps {
  comment: Comment;
}

export interface EditingCommentState {
  content: string;
}

export interface ReplyCommentState {
  content: string;
}
