import React, { createContext, ReactNode, useContext, useState } from 'react';

type UserType = { userId: string; username: string } | null;

type UserContextType = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType>({
    user: null, // początkowa wartość to null
    setUser: () => {}, // pusta funkcja, ponieważ nie będzie używana bez dostawcy kontekstu
});

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserType>(() => {
        const storedUser = localStorage.getItem('userId');
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
            // Załóżmy, że potrzebujesz również username, który powinien być przechowywany w localStorage
            const storedUsername = localStorage.getItem('username');
            return { userId: storedUser, username: storedUsername || '' };
        }
        return null;
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
