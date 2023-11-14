import "./MyAccountNav.css";

import avatar from "../../ProductDetails/UsersComments/istockphoto-1337144146-612x612.jpg"
import {Link} from "react-router-dom";
import React from "react";
export const MyAccountNav = () => {


    return (
        <>
            <div className="my-account-container">
                <div className="my-account-userinfo">
                    <img src={avatar} alt=""/>
                    <p className="my-account-username">John Doe</p>
                </div>
                <nav className="my-account-navbar">
                    <ul className="my-account-list">
                        <Link to="/my-account/info/1" className="my-account-item"><i className="fa-regular fa-user"></i> My Account</Link>
                        <Link to="/my-account/address/1" className="my-account-item"><i className="fa-solid fa-address-book"></i> My Address</Link>
                        <Link to="/my-account/myorders/1" className="my-account-item"><i className="fa-regular fa-clipboard"></i> My Order</Link>
                        <Link to="/my-account/support/1" className="my-account-item"><i className="fa-solid fa-headset"></i> Support Tickets</Link>
                        <Link to="#" className="my-account-item"><i className="fa-solid fa-right-from-bracket"></i> Log Out</Link>
                    </ul>
                </nav>
            </div>
        </>
    );
};