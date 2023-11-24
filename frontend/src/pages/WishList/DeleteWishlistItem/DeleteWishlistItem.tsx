import React from "react";
import {WishListPropsTypes} from "../../../types/wishListProps.types";
import axios from "axios";

export const DeleteWishlistItem: React.FC<WishListPropsTypes>  = ({productId}) => {

    const deleteComment = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        try {
            const response = await axios.delete(`http://localhost:5000/wishlist/delete/${productId}`, config);
            console.log(response)
        } catch (error) {
            console.error('Error deleting the comment:', error);
        }
    };

    return (
        <>
            <button onClick={deleteComment} className="wishlist-prod-del">DELETE</button>
        </>
    );
};