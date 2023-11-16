import React from "react";

export interface BucketProps {
    isBucketMenuOpen: boolean;
    totalItems: number;
    toggleBucketMenu: () => void;
    setTotalItems: React.Dispatch<React.SetStateAction<number>>
    setIsBucketMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}