import "./Bucket.css"
import React, { useEffect, useState } from 'react';

import logo from "./i-fifa-23-gra-pc.png"
import {Link} from "react-router-dom";
import {BucketProps} from "./Bucket.types";
import axios from 'axios';
import { BasketItem } from '../../../types/bucket.types';


export const Bucket: React.FC<BucketProps> = ({toggleBucketMenu, setIsBucketMenuOpen, isBucketMenuOpen}) => {


    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

    useEffect(() => {
        const fetchBasketItems = async () => {
            try {
                // Przykładowo zakładamy, że identyfikator użytkownika przechowujemy w local storage
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`http://localhost:5000/basket/${userId}`);
                setBasketItems(response.data.items); // Zakładamy, że backend zwraca obiekt koszyka z właściwością 'items'
            } catch (error) {
                console.error('Error fetching basket items:', error);
            }
        };

        if (isBucketMenuOpen) {
            fetchBasketItems();
        }
    }, [isBucketMenuOpen]);

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
                            <Link to={`/product-details/${item.product.id}`} className="item-title">{item.product.title}</Link>
                            <p className="item-amount">{item.quantity}x {item.product.price} zł</p>
                        </div>
                        <img src={item.product.image} alt={item.product.title} className="item-img"/>
                        <i className="delete-item fa-solid fa-xmark"></i>
                    </div>
                    ))}
                    <div className="bucket-total-price">
                        <p className="total">Total:</p>
                        <p className="total-amount">{basketItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0)} zł</p>
                    </div>
                    <div className="bucket-buttons">
                        <button className="clear-bucket">CLEAR CART</button>
                        <button className="pay">PAY</button>
                    </div>
                </div>
            )}
        </>
    );

};