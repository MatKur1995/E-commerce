import "./Pagination.css";
import {useState} from "react";


export const Pagination = () => {

    return (
        <>
            <div className="pagination">
                <a href="#" className="pagination__arrow">&#60;</a>
                <a href="#" className="pagination__number">1</a>
                <a href="#" className="pagination__number">2</a>
                <a href="#" className="pagination__number">3</a>
                <a href="#" className="pagination__number">4</a>
                <a href="#" className="pagination__number">5</a>
                <a href="#" className="pagination__arrow">&#62;</a>
            </div>


        </>
    );
};