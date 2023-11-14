import "./Notifications.css";

import userav from "../../../../pages/ProductDetails/UsersComments/istockphoto-1337144146-612x612.jpg"
import {Link} from "react-router-dom";
import React from "react";
import {NotificationsTypes} from "./Notifications.types";

export const Notifications: React.FC<NotificationsTypes> = ({setNotificationsOpen, isNotificationsOpen, toggleNotifications}) => {



    return (
        <>
            <div className={`notifications-wrapper ${isNotificationsOpen ? 'notification-open' : 'notification-closed'}`}>
                <div className="notifications-title-container">
                    <p className="notifications-title">Notifications</p>
                    <i onClick={toggleNotifications} className="notifications-close fa-solid fa-xmark"></i>
                </div>
                <div className="orders-notifications-container">
                    <div className="order-notification">
                        <img src={userav} alt=""/>
                        <div className="notification-info-wrapper">
                            <p>John Doe</p>
                            <p>Bought <Link to="#">FIFA2023 for</Link><span> 30$</span></p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                    <div className="order-notification">
                        <img src={userav} alt=""/>
                        <div className="notification-info-wrapper">
                            <p>John Doe</p>
                            <p>Bought <Link to="#">FIFA2023 for</Link><span> 30$</span></p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                    <div className="order-notification">
                        <img src={userav} alt=""/>
                        <div className="notification-info-wrapper">
                            <p>John Doe</p>
                            <p>Bought <Link to="#">FIFA2023 for</Link><span> 30$</span></p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                    <div className="order-notification">
                        <img src={userav} alt=""/>
                        <div className="notification-info-wrapper">
                            <p>John Doe</p>
                            <p>Bought <Link to="#">FIFA2023 for</Link><span> 30$</span></p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};