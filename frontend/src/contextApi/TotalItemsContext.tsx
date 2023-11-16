// src/context/TotalItemsContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Typ dla wartości kontekstu
type TotalItemsContextType = {
    totalItems: number;
    setTotalItems: React.Dispatch<React.SetStateAction<number>>;
};

// Tworzenie kontekstu
export const TotalItemsContext = createContext<TotalItemsContextType | undefined>(undefined);

// Tworzenie providera
type TotalItemsProviderProps = {
    children: ReactNode;
};

export const TotalItemsProvider = ({ children }: TotalItemsProviderProps) => {
    const [totalItems, setTotalItems] = useState(0);

    return (
        <TotalItemsContext.Provider value={{ totalItems, setTotalItems }}>
            {children}
        </TotalItemsContext.Provider>
    );
};

// Hook do używania kontekstu
export const useTotalItems = () => {
    const context = useContext(TotalItemsContext);
    if (!context) {
        throw new Error('useTotalItems must be used within a TotalItemsProvider');
    }
    return context;
};
