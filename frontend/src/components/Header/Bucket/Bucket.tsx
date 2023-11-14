import "./Bucket.css"
import React from "react";

import logo from "./i-fifa-23-gra-pc.png"
import {Link} from "react-router-dom";
import {BucketProps} from "./Bucket.types";


export const Bucket: React.FC<BucketProps> = ({toggleBucketMenu, setIsBucketMenuOpen, isBucketMenuOpen}) => {


    return (
        <>
            {isBucketMenuOpen && (
                <div className='bucket-container'>
                    <div className="close-bucket">
                        <p className="bucket-title">MY CART</p>
                        <i onClick={toggleBucketMenu} className="bucket-close fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="bucket-item">
                        <div className="item-container">
                            <Link to="/" className="item-title">FIFA 2023</Link>
                            <p className="item-amount">1x 63.00 zł</p>
                        </div>
                        <img src={logo} alt="" className="item-img"/>
                        <i className="delete-item fa-solid fa-xmark"></i>
                    </div>
                    <div className="bucket-total-price">
                        <p className="total">Total:</p>
                        <p className="total-amount">63 zł</p>
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