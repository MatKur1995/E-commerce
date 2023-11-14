import "./AdminHeader.css"
import {AdminNavigation} from "../AdminNavigation/AdminNavigation";
import {useState} from "react";
import {SearchBar} from "../AdminHeader/SearchBar/SearchBar";
import {Notifications} from "./Notifications/Notifications";


export const AdminHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isNotificationsOpen, setNotificationsOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleSearch = () => {
        setIsSearchOpen(prev => !prev);
    };

    const toggleNotifications = () => {
        setNotificationsOpen(prev => !prev);
    };

    return (
        <>
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <div className="header-admin">
                <i onClick={toggleMenu} className="head-admin-bars fa-solid fa-bars"></i>
                <div className="bell-search-container">
                    <i onClick={toggleSearch} className="header-admin-search fa-solid fa-magnifying-glass"></i>
                    <i onClick={toggleNotifications} className="head-admin-bell fa-regular fa-bell"></i>
                </div>
            </div>
            <AdminNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu}/>
            <SearchBar isSearchOpen={isSearchOpen} toggleSearch={toggleSearch}/>
            <Notifications isNotificationsOpen={isNotificationsOpen} toggleNotifications={toggleNotifications}/>
        </>
    );
};