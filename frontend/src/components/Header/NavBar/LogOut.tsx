import {Link} from "react-router-dom";
import React from "react";

export const LogOut = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.href = '/';
    };

    return (
        <>
            <li onClick={handleLogout} className="sub-nav-item"><Link className='sub-nav-item' to="/logout">Log out</Link></li>
        </>
    );
};