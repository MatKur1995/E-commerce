import React from "react";

export interface NavBarProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}