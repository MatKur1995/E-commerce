import {Dispatch, SetStateAction} from "react";

export interface ProductPaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    onPageChange: (page: number) => void; // Określenie typu funkcji
}