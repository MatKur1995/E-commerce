import "./ShoppingCart.css";
import React, {useEffect, useState} from "react";

import fifa2023 from "../Home/ShopItems/i-fifa-23-gra-pc.png"
import axios from "axios";
import {BasketItem} from "../../types/bucket.types";
import {useTotalItems} from "../../contextApi/TotalItemsContext";


export const ShoppingCart = () => {

    const {totalItems, setTotalItems} = useTotalItems();
    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

    useEffect(() => {
        const fetchBasketItems = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');
                if (!token || !userId) {
                    console.error('Token or User ID not found in localStorage');
                    return;
                }
                const response = await axios.get(`http://localhost:5000/basket/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTotalItems(response.data.items.reduce((acc: number, item: BasketItem) => acc + item.quantity, 0));
                setBasketItems(response.data.items);
            } catch (error) {
                console.error('Error fetching basket items:', error);
            }
        };

        fetchBasketItems()

    }, [basketItems, totalItems]);

    const handleCheckout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found in localStorage');
                return;
            }
            // Wywołaj endpoint checkout
            const response = await axios.post(
                'http://localhost:5000/orders/checkout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            alert('Thank you for your purchase!');

        } catch (error) {
            console.error('Error during checkout:', error);
            alert('There was an error processing your order.');

        }
    }
            return (
        <>
            <h2 className="shoppingcart-title offers-title">SHOPPING CART</h2>
            <div className="shopping-cart-container">
                <div className="shopping-cart-product">
                    {basketItems && basketItems.map(item =>
                        <div className="shopping-cart-wrapper">
                            <div className="shopping-cart-product-img">
                                <img src={`http://localhost:5000/uploads/products-images/${item.product.image}`} alt=""/>
                            </div>
                            <div className="shopping-cart-wrapper-infos">
                                <p className="shopping-cart-prodcut-title">{item.product.title}</p>
                                <div className="unit-price-container">
                                    <p className="unit-price-p">Unit Price</p>
                                    <div className="unit-prices-container">
                                        <p className="unit-price">{item.product.price} zł</p>
                                        <p className="unit-price-before">170 zł</p>
                                    </div>
                                </div>
                                <div className="subtotal-price-container">
                                    <p className="subtotal">Subtotal</p>
                                    <p className="subtotal-price">{item.product.price} zł</p>
                                </div>
                                <div className="quantity-container">
                                    <p className="quantity">Quantity</p>
                                    <input type="number"/>
                                    <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="quantity-container-768">
                                <p className="quantity-768">Quantity</p>
                                <div className="quality-input">
                                    <input type="number"/>
                                    <button className="quantity-delete"><i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
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
                            <button onClick={handleCheckout} className="total-price-btn">CONTINUE</button>
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