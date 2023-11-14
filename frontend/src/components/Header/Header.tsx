import "./Header.css"
import {HeaderProps} from "./Header.types";
import React, {useState} from "react";
import {NavBar} from "./NavBar/NavBar";
import {Bucket} from "./Bucket/Bucket";
import {SearchBar} from "./NavBar/SearchBar/SearchBar";
import {NavBarDesktop} from "./NavBarDesktop/NavBarDesktop";
import {Link} from "react-router-dom";



export const Header: React.FC<HeaderProps> = props => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isBucketMenuOpen, setIsBucketMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleBucketMenu = () => {
        setIsBucketMenuOpen(prev => !prev);
    };

    return (
        <>
            <header className="main-header">
                <i onClick={toggleMenu} className="header-bars fa-solid fa-bars"></i>
                <h1 className="header-title"><Link to="/"><span>O</span>nline-<span>S</span>hop</Link></h1>
                <div className="search-header">
                    <SearchBar/>
                </div>
                <div className="whatsapp-support">
                    <i className="whatsapp-icon fa-brands fa-whatsapp"></i>
                    <div className="whatsapp-info">
                        <p className="whatsapp-parahraph">Whatsapp Support 24/7</p>
                        <p className="whatsapp-parahraph">+48 111-222-333</p>
                    </div>
                </div>
                <div className="icon-badge-container">
                    <i onClick={toggleBucketMenu} className="header-bucket fa-solid fa-bag-shopping"></i>
                    <span className="icon-badge">1</span>
                </div>
            </header>
            <NavBarDesktop/>
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu}/>
            <Bucket isBucketMenuOpen={isBucketMenuOpen} setIsBucketMenuOpen={setIsBucketMenuOpen} toggleBucketMenu={toggleBucketMenu}/>
        </>
    );
}