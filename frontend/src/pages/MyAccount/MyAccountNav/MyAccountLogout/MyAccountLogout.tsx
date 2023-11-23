import {Link, useNavigate} from "react-router-dom";
import React from "react";


export const MyAccountLogout = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.href = '/';
    };

    return (
        <>
            <Link to='#' onClick={handleLogout} className="my-account-item"><i className="fa-solid fa-right-from-bracket"></i> Log Out</Link>
        </>
    );
};