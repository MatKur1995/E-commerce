import "./Footer.css"
import React from "react";
import {Link} from "react-router-dom";


export const Footer = () => {



    return (
        <footer>
            <div className="wrapper-footer">
                <div className="footer-info">
                    <h3 className="footer-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                    <div className="wrapper-email">
                        <i className="footer-icon fa-regular fa-envelope"></i>
                        <p className="email">example@example.com</p>
                    </div>
                    <div className="wrapper-phone">
                        <i className="footer-icon fa-solid fa-phone"></i>
                        <p className="phone">111-222-333</p>
                    </div>
                </div>
                <div className="footer-links">
                    <p className="useful-link">Useful Links:</p>
                    <div className="links-container">
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                        <Link to="/">Link 4</Link>
                        <Link to="/">Link 5</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}