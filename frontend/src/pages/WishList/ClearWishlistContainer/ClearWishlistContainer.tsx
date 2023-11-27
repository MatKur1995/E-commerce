import React from "react";
import axios from "axios";

export const ClearWishlistContainer = () => {

    const clearWishlist = async () => {
        console.log('test1')
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        try {
            const response = await axios.delete(`http://localhost:5000/wishlist/clear`, config);
        } catch (error) {
            console.error('Error deleting the comment:', error);
        }
    };


    return (
        <>
            <button onClick={clearWishlist} className="clear-wishlist">CLEAR LIST</button>
        </>
    );
};