import React from "react";

export interface BucketProps {
    isBucketMenuOpen: boolean;
    toggleBucketMenu: () => void;
    setIsBucketMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}