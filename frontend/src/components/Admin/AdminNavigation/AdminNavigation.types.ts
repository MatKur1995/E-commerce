import React from "react";

export interface AdminNavigationTypes {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}