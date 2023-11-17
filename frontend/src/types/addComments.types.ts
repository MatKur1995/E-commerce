
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

export interface EditCommentProps {
  comment: Comment;
}

export interface EditingCommentState {
  content: string;
}
