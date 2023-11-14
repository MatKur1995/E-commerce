import "./ProductDetails.css";

import logo from "../Home/ShopItems/i-fifa-23-gra-pc.png"
import React, {useEffect, useState} from "react";
import {UsersComments} from "./UsersComments/UsersComments";
import {UsersReview} from "./UsersReview/UsersReview";
import {Link, useParams} from "react-router-dom";
import { RouteParams } from "../../types/params.types"
import axios from "axios";
import {Product} from "../../types/product.types";
export const ProductDetails = () => {


    const [activeComment, setActiveComment] = useState(true)
    const [activeReviews, setActiveReviews] = useState(false)
    const [productDetails, setProductDetails] = useState<Product>()

    const { id } = useParams<RouteParams>();
    const ShowContent = () => {
        if (activeComment) {
            setActiveReviews(true)
            setActiveComment(false)
        } else {
            setActiveComment(true)
            setActiveReviews(false)
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/product-details/${id}`);
                setProductDetails(response.data);
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            <div className="links-nav">
                <Link to="/" className="homelink">Home</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> Product Details</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> FIFA 2023</Link>
            </div>
            {productDetails && (
                <div className="prod-details">
                    <div className="wrapper-768">
                        <div className="test100">
                            <div className="prod-img">
                                <img src={`http://localhost:5000/uploads/products-images/${productDetails.image}`} alt=""/>
                            </div>
                        </div>
                        <div className="prod-info">
                            <p className="prod-title">{productDetails.title}</p>
                            <div className="prod-rate single-product-rate-stock">
                                <div className="product-stars">
                                    <i className="fill-star fa-solid fa-star"></i>
                                    <i className="fill-star fa-solid fa-star"></i>
                                    <i className="fill-star fa-solid fa-star"></i>
                                    <i className="fill-star fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <div className="product-button">
                                    <button className="product-stock">INSTOCK</button>
                                </div>
                            </div>
                            <div className="prod-price-cont">
                                <p className="prod-price">{productDetails.price} zł</p>
                                <p className="prod-price-before">170zł</p>
                            </div>
                            <div className="prod-short-description">
                                <p>{productDetails.shortDescription}</p>
                            </div>
                            <div className="prod-actions">
                                <input className="number-input" type="number" min="0" max="100" step="1" value="50"/>
                                <button className="prod-add">ADD TO CART</button>
                                <button className="prod-wishlist"><i className="fa-regular fa-heart"></i></button>
                            </div>
                            <div className="prod-categories">
                                <p className="prod-p">Categories: <span>{productDetails.category}</span> </p>
                                <p className="prod-p">Platform: <span>{productDetails.platform}</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="test200">
                        <div className="prod-long-description">
                            <p className="prod-long-title">DESCRIPTION</p>
                            <p className="prod-long-p">{productDetails.longDescription}</p>
                        </div>
                        <div className="comments-and-reviews">
                            <button onClick={ShowContent} className={`${activeComment ? 'active-button comments' : 'comments'}`}>Comments</button>
                            <button onClick={ShowContent} className={`${activeReviews ? 'active-button comments' : 'comments'}`}>Reviews</button>
                        </div>
                        <div className="comments-user">
                            {activeComment && <UsersComments activeComment={activeComment}/> }
                        </div>
                        <div className="rates-users">
                            {activeReviews && <UsersReview activeReviews={activeReviews}/>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};