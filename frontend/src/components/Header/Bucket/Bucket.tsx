import "./Bucket.css"
import React, {useEffect, useState} from 'react';

import logo from "./i-fifa-23-gra-pc.png"
import {Link} from "react-router-dom";
import {BucketProps} from "./Bucket.types";
import axios from 'axios';
import {BasketItem} from '../../../types/bucket.types';


export const Bucket: React.FC<BucketProps> = ({totalItems, setTotalItems, toggleBucketMenu, setIsBucketMenuOpen, isBucketMenuOpen}) => {


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


        if (isBucketMenuOpen) {
            fetchBasketItems();
        }
    }, [isBucketMenuOpen, basketItems, totalItems]);

    const deleteBasketItem = async (itemId: number) => {
        try {
            await axios.delete(`http://localhost:5000/basket/delete/${itemId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setBasketItems(basketItems.filter(item => item.id !== itemId));
            updateTotalItems(basketItems)
        } catch (error: any) {
            console.error("Error deleting basket item:", error);
        }
    }

    const updateTotalItems = (newBasketItems: BasketItem[]) => {
        const newTotalItems = newBasketItems.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(newTotalItems);
    };


    // Funkcja clearCart wewnątrz komponentu Bucket

    const clearCart = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
            console.error('Token or User ID not found in localStorage');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/basket/delete/${userId}/clear`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setBasketItems([]);
            setTotalItems(0);
            console.log('Cart cleared successfully');
        } catch (error) {
            console.error('Error clearing the cart:', error);
        }
    };

    return (
        <>
            {isBucketMenuOpen && (
                <div className='bucket-container'>
                    <div className="close-bucket">
                        <p className="bucket-title">MY CART</p>
                        <i onClick={toggleBucketMenu} className="bucket-close fa-solid fa-arrow-right"></i>
                    </div>
                    {basketItems.map(item => (
                        <div key={item.id} className="bucket-item">
                            <div className="item-container">
                                <Link to={`/product-details/${item.product.id}`}
                                      className="item-title">{item.product.title}</Link>
                                <p className="item-amount">{item.quantity}x {item.product.price} zł</p>
                            </div>
                            <div className="item-img-container">
                                <img src={`http://localhost:5000/uploads/products-images/${item.product.image}`}
                                     alt={item.product.title} className="item-img"/>
                            </div>
                            <i onClick={() => deleteBasketItem(item.id)} className="delete-item fa-solid fa-xmark"></i>
                        </div>
                    ))}
                    <div className="bucket-total-price">
                        <p className="total">Total:</p>
                        <p className="total-amount">{basketItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0)} zł</p>
                    </div>
                    <div className="bucket-buttons">
                        <button onClick={clearCart} className="clear-bucket">CLEAR CART</button>
                        <button className="pay">PAY</button>
                    </div>
                </div>
            )}
        </>
    );

};