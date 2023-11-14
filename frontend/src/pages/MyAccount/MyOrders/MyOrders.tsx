import "./MyOrders.css"
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";

import fifalogo from "../../Home/ShopItems/i-fifa-23-gra-pc.png"
import {CurrentURL} from "../../../components/CurrentURL/CurrentURL";
import React from "react";


export const MyOrders = () => {


    return (
        <>
            <CurrentURL/>
            <div className="my-orders-container">
                <div className="wrapper-1200">
                    <MyAccountNav/>
                </div>
                <div className="my-orders-wrapper">
                    <p className="my-orders-title">My Orders</p>
                    <div className="my-orders-searchbar">
                        <input type="text"/>
                        <i className="search-order fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="order-status">
                        <button className="order-status-processing"><i className="fa-regular fa-clock"></i> Processing
                        </button>
                        <button className="order-status-completed"><i className="fa-solid fa-check"></i> Completed
                        </button>
                        <button className="order-status-cancelled"><i className="fa-solid fa-xmark"></i> Cancelled
                        </button>
                    </div>
                    <div className="single-order-wrapper">
                        <div className="order-wrapper-992">
                            <img src={fifalogo} alt=""/>
                            <div>
                                <p className="single-order-p">FIFA 2023</p>
                                <p className="single-order-time"><i className="fa-regular fa-clock"></i> 03.11.2023</p>
                                <p className="single-order-id">Transaction ID <span>#12841923</span></p>
                                <p className="single-order-payment">Total Payment <span>130zł</span></p>
                            </div>
                        </div>
                        <div className="order-status-">
                            <button className="order-status-btn-completed">Complleted</button>
                        </div>
                    </div>
                    <div className="single-order-wrapper">
                        <div className="order-wrapper-992">
                            <img src={fifalogo} alt=""/>
                            <div>
                                <p className="single-order-p">FIFA 2023</p>
                                <p className="single-order-time"><i className="fa-regular fa-clock"></i> 03.11.2023</p>
                                <p className="single-order-id">Transaction ID <span>#12841923</span></p>
                                <p className="single-order-payment">Total Payment <span>130zł</span></p>
                            </div>
                        </div>
                        <div className="order-status-">
                            <button className="order-status-btn-processing">Processing</button>
                        </div>
                    </div>
                    <div className="single-order-wrapper">
                        <div className="order-wrapper-992">
                            <img src={fifalogo} alt=""/>
                            <div>
                                <p className="single-order-p">FIFA 2023</p>
                                <p className="single-order-time"><i className="fa-regular fa-clock"></i> 03.11.2023</p>
                                <p className="single-order-id">Transaction ID <span>#12841923</span></p>
                                <p className="single-order-payment">Total Payment <span>130zł</span></p>
                            </div>
                        </div>
                        <div className="order-status-">
                            <button className="order-status-btn-cancelled">Cancelled</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};