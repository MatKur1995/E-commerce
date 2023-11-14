import "./ShoppingCart.css";
import React from "react";

import fifa2023 from "../Home/ShopItems/i-fifa-23-gra-pc.png"


export const ShoppingCart = () => {



    return (
        <>
            <h2 className="shoppingcart-title offers-title">SHOPPING CART</h2>
            <div className="shopping-cart-container">
                <div className="shopping-cart-product">
                    <div className="shopping-cart-wrapper">
                        <div className="shopping-cart-product-img">
                            <img src={fifa2023} alt=""/>
                        </div>
                        <div className="shopping-cart-wrapper-infos">
                            <p className="shopping-cart-prodcut-title">FIFA 2023</p>
                            <div className="unit-price-container">
                                <p className="unit-price-p">Unit Price</p>
                                <div className="unit-prices-container">
                                    <p className="unit-price">130 zł</p>
                                    <p className="unit-price-before">170 zł</p>
                                </div>
                            </div>
                            <div className="subtotal-price-container">
                                <p className="subtotal">Subtotal</p>
                                <p className="subtotal-price">130zł</p>
                            </div>
                            <div className="quantity-container">
                                <p className="quantity">Quantity</p>
                                <input type="number"/>
                                <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div className="quantity-container-768">
                            <p className="quantity-768">Quantity</p>
                            <div className="quality-input">
                                <input type="number"/>
                                <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="shopping-cart-wrapper">
                        <div className="shopping-cart-product-img">
                            <img src={fifa2023} alt=""/>
                        </div>
                        <div className="shopping-cart-wrapper-infos">
                            <p className="shopping-cart-prodcut-title">FIFA 2023</p>
                            <div className="unit-price-container">
                                <p className="unit-price-p">Unit Price</p>
                                <div className="unit-prices-container">
                                    <p className="unit-price">130 zł</p>
                                    <p className="unit-price-before">170 zł</p>
                                </div>
                            </div>
                            <div className="subtotal-price-container">
                                <p className="subtotal">Subtotal</p>
                                <p className="subtotal-price">130zł</p>
                            </div>
                            <div className="quantity-container">
                                <p className="quantity">Quantity</p>
                                <input type="number"/>
                                <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div className="quantity-container-768">
                            <p className="quantity-768">Quantity</p>
                            <input type="number"/>
                            <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                    <div className="shopping-cart-wrapper">
                        <div className="shopping-cart-product-img">
                            <img src={fifa2023} alt=""/>
                        </div>
                        <div className="shopping-cart-wrapper-infos">
                            <p className="shopping-cart-prodcut-title">FIFA 2023</p>
                            <div className="unit-price-container">
                                <p className="unit-price-p">Unit Price</p>
                                <div className="unit-prices-container">
                                    <p className="unit-price">130 zł</p>
                                    <p className="unit-price-before">170 zł</p>
                                </div>
                            </div>
                            <div className="subtotal-price-container">
                                <p className="subtotal">Subtotal</p>
                                <p className="subtotal-price">130zł</p>
                            </div>
                            <div className="quantity-container">
                                <p className="quantity">Quantity</p>
                                <input type="number"/>
                                <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div className="quantity-container-768">
                            <p className="quantity-768">Quantity</p>
                            <input type="number"/>
                            <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>

                <div className="summary-info-wrapper">
                    <div className="discount-container">
                        <p className="discount-p">Discount Coupon</p>
                        <form>
                            <input type="text" className="discount-input" placeholder="Your code here"/>
                            <button className="discount-btn">APPLY</button>
                        </form>
                    </div>
                    <div className="summary-bucket-container">
                        <p className="summary-title">Summary of your purchase:</p>
                        <div className="summary-info">
                            <p className="summary-subtotal">Subtotal: <span>130 zł</span></p>
                            <p className="summary-subtotal">Vat: <span>21 zł</span></p>
                            <p className="summary-subtotal">Shipping: <span>0.00 zł</span></p>
                        </div>
                        <div className="total-price">
                            <p className="total-price-p">TOTAL: <span>130zł</span></p>
                            <button className="total-price-btn">CONTINUE</button>
                        </div>
                        <div className="summary-actions">
                            <p className="clear-summary"><i className="fa-solid fa-eraser"></i> CLEAR BUCKET</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};