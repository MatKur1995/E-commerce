import React, {useState} from "react";
import {WishListPropsTypes} from "../../../types/wishListProps.types";
import axios from "axios";

export const WishList: React.FC<WishListPropsTypes>  = ({productId}) => {

    const [message, setMessage] = useState('')
    const addProductToWishlist = () => {

        axios.post(`http://localhost:5000/wishlist/add/${productId}`, productId, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Zakładając, że token jest przechowywany w localStorage pod kluczem 'token'
            }
        })
            .then(response => {
                if (response.status === 201) {
                    setMessage('Produkt dodany do koszyka')
                }
            })
            .catch(error => {
                console.log(error);
                // Tutaj powinieneś obsłużyć wyświetlanie błędu użytkownikowi, np. informując go o potrzebie zalogowania
            });
    };

    return (
        <>
            <i onClick={addProductToWishlist} className="fa-regular fa-heart"></i>

            {message && <p>{message}</p>}
        </>
    );
};