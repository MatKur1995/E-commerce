import "./WishList.css";
import {Link} from "react-router-dom";
import React from "react";

import fifalogo from "../Home/ShopItems/i-fifa-23-gra-pc.png"

export const WishList = () => {



    return (
        <div className="wish-list-container">
            <div className="links-nav">
                <Link to="/" className="homelink">Home</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> My Account</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> Wishlist</Link>
            </div>
            <h2 className="wishlist-title offers-title">WISHLIST</h2>
            <div className="wish-list-wrapper">
                <button className="clear-wishlist">CLEAR LIST</button>
                <div className="wishlist-product">
                    <div className="wishlist-prod-img">
                        <img src={fifalogo} alt="" className=""/>
                    </div>
                    <div className="wishlist-prod-info">
                        <p className="wishlist-prod-title">Cyberpunk 2077</p>
                        <p className="wishlist-prod-price">150 zł</p>
                        <p className="wishlist-prod-stock">IN STOCK</p>
                        <div className="wishlist-prod-action">
                            <Link to="/" className="wishlist-prod-viewdetails">VIEW DETAILS</Link>
                            {/*<button className="wishlist-prod-del"> DELETE</button>*/}
                        </div>
                        <button className="wishlist-delete-button"><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="wishlist-prod-action-768">
                        <Link to="/" className="wishlist-prod-viewdetails-768">VIEW DETAILS</Link>
                        <button className="wishlist-prod-del"> DELETE</button>
                    </div>
                </div>
                <div className="wishlist-product">
                    <div className="wishlist-prod-img">
                        <img src={fifalogo} alt="" className=""/>
                    </div>
                    <div className="wishlist-prod-info">
                        <p className="wishlist-prod-title">FIFA 2023</p>
                        <p className="wishlist-prod-price">150 zł</p>
                        <p className="wishlist-prod-stock">IN STOCK</p>
                        <div className="wishlist-prod-action">
                            <Link to="/" className="wishlist-prod-viewdetails">VIEW DETAILS</Link>
                            {/*<button className="wishlist-prod-del"> DELETE</button>*/}
                        </div>
                        <button className="wishlist-delete-button"><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="wishlist-prod-action-768">
                        <Link to="/" className="wishlist-prod-viewdetails-768">VIEW DETAILS</Link>
                        <button className="wishlist-prod-del"> DELETE</button>
                    </div>
                </div>
                <div className="wishlist-product">
                    <div className="wishlist-prod-img">
                        <img src={fifalogo} alt="" className=""/>
                    </div>
                    <div className="wishlist-prod-info">
                        <p className="wishlist-prod-title">FIFA 2023</p>
                        <p className="wishlist-prod-price">150 zł</p>
                        <p className="wishlist-prod-stock">IN STOCK</p>
                        <div className="wishlist-prod-action">
                            <Link to="/" className="wishlist-prod-viewdetails">VIEW DETAILS</Link>
                            {/*<button className="wishlist-prod-del"> DELETE</button>*/}
                        </div>
                        <button className="wishlist-delete-button"><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="wishlist-prod-action-768">
                        <Link to="/" className="wishlist-prod-viewdetails-768">VIEW DETAILS</Link>
                        <button className="wishlist-prod-del"> DELETE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};