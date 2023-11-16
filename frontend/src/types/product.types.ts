// Definicja interfejsu dla komentarza

export interface User {
    id: number;
    username: string;
    // Dodaj tutaj inne pola związane z użytkownikiem, jeśli są potrzebne
}

export interface Comment {
    id: number;
    content: string;
    createdAt: Date;
    user: User; // Tutaj dodajesz pole user typu User
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
