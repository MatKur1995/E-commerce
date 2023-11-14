import "./SearchBar.css";
import React from "react";
import {SearchBarTypes} from "./SearchBar.types";


export const SearchBar: React.FC<SearchBarTypes> = ({isSearchOpen, toggleSearch, setIsSearchOpen}) => {


    return (
        <>
            {isSearchOpen && <div className={`overlay ${isSearchOpen ? 'overlay-show' : ''}`} onClick={toggleSearch}></div>}
            {isSearchOpen &&
                <div className={`admin-searchbar ${isSearchOpen ? '' : 'search-closing'}`}>
                    <p className="admin-search-title">Search</p>
                    <div className="admin-search-container">
                        <input type="text"/>
                        <i className="admin-search-icon fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            }
        </>
    );
};