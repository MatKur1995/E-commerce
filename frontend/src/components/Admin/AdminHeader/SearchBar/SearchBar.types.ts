import React from "react";

export interface SearchBarTypes {
    isSearchOpen: boolean;
    toggleSearch: () => void;
    setIsSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}