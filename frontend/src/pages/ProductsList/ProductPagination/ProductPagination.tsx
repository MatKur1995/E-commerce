import "./ProductPagination.css";
import React from "react";
import { ProductPaginationProps } from "../../../types/ProductPagination.types"



export const ProductPagination: React.FC<ProductPaginationProps> = ({ currentPage, setCurrentPage, totalPages, onPageChange }) => {


    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="pagination-container">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="page-item"
                >
                    Prev
                </button>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={`page-item ${currentPage === number ? 'active' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="page-item"
                >
                    Next
                </button>
            </div>
        </>
    );
};