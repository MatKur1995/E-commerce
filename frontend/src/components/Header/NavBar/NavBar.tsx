import "./NavBar.css"
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {NavBarProps} from "./NavBar.types";
import {SearchBar} from "./SearchBar/SearchBar";


export const NavBar: React.FC<NavBarProps> = ({isMenuOpen, setIsMenuOpen, toggleMenu}) => {

    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    return(
        <>
            {isMenuOpen && (
                <nav className="main-navbar">
                    <i onClick={toggleMenu} className="hide-nav fa-solid fa-xmark"></i>
                    <SearchBar/>
                    <ul className="main-nav-list">
                        <li className="main-nav-item"><Link className='main-nav-item' to="#">Homepage</Link></li>
                        <li className={`main-nav-item`} onClick={toggleSubMenu}>
                            <Link className={`${isSubMenuOpen ? 'no-border' : ''} main-nav-item`} to="#">My account <i className={`${isSubMenuOpen ? 'submenu-arrow fa-solid fa-caret-up' : 'submenu-arrow fa-solid fa-caret-down'}`}></i></Link>
                            {isSubMenuOpen && (
                                <ul className="sub-nav-list">
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="/my-account/info/1">My profile</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="/my-account/myorders/1">My orders</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="/my-account/wish-list/1">Wish list</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="/my-account/support/1">Support</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="/logout">Log out</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="main-nav-item"><Link className='main-nav-item' to="/products-list">Products</Link></li>
                        <li className="main-nav-item"><Link className='main-nav-item' to="/login">Login</Link></li>
                        <li className="main-nav-item"><Link className='main-nav-item' to="/register">Register</Link></li>

                    </ul>
                </nav>
            )}
        </>
    )
}