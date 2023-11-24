import "./WishList.css";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

import fifalogo from "../Home/ShopItems/i-fifa-23-gra-pc.png"
import axios from "axios";
import {WishlistItem} from "../../types/wishListProps.types";
import {DeleteWishlistItem} from "./DeleteWishlistItem/DeleteWishlistItem";
import {ClearWishlistContainer} from "./ClearWishlistContainer/ClearWishlistContainer";

export const WishList = () => {

    const [wishList, setWishList] = useState<WishlistItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/wishlist/items', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (Array.isArray(response.data.items)) {
                    setWishList(response.data.items);
                } else {
                    console.error("Otrzymane dane nie są tablicą:", response.data.items);
                }
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchData();
    }, [wishList]);


    return (
        <div className="wish-list-container">
            <div className="links-nav">
                <Link to="/" className="homelink">Home</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> My
                    Account</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> Wishlist</Link>
            </div>
            <h2 className="wishlist-title offers-title">WISHLIST</h2>
            <div className="wish-list-wrapper">
                <ClearWishlistContainer/>
                {wishList && wishList.map(item =>
                    <div key={item.product.id} className="wishlist-product">
                        <div className="wishlist-prod-img">
                            <img src={`http://localhost:5000/uploads/products-images/${item.product.image}`} alt="" className=""/>
                        </div>
                        <div className="wishlist-prod-info">
                            <p className="wishlist-prod-title">{item.product.title}</p>
                            <p className="wishlist-prod-price">{item.product.price}</p>
                            <p className="wishlist-prod-stock">IN STOCK</p>
                            <div className="wishlist-prod-action">
                                <Link to={`/product-details/${item.product.id}`} className="wishlist-prod-viewdetails">VIEW DETAILS</Link>
                            </div>
                            <button className="wishlist-delete-button"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="wishlist-prod-action-768">
                            <Link to={`/product-details/${item.product.id}`} className="wishlist-prod-viewdetails-768">VIEW DETAILS</Link>
                            <DeleteWishlistItem productId={item.id}/>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};