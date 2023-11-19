export interface User {
    id: number;
    username: string;
    // Add other user-related fields if needed
}

export interface CommentReply {
    id: number;
    content: string;
    user: User;
    // comment: Comment; // You probably don't need to reference back to the comment in the reply
}

export interface Comment {
    id: number;
    content: string;
    createdAt: Date;
    user: User;
    replies: CommentReply[]; // Change this to an array of CommentReply
}

// Uaktualniony interfejs produktu z właściwym typem dla komentarzy
export interface Product {
    id: number;
    title: string;
    comments: Comment[]; // Użyj interfejsu Comment[] zamiast string[]
    shortDescription: string;
    longDescription: string;
    image: string;
    category: string;
    platform: string;
    price: number;
    priceBefore?: number; // Znacznik zapytania wskazuje, że pole jest opcjonalne
}
