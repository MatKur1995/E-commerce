import "./Users.css";
import {AdminHeader} from "../../../components/Admin/AdminHeader/AdminHeader";

import useravatar from "../../ProductDetails/UsersComments/istockphoto-1337144146-612x612.jpg"
import React from "react";


export const Users = () => {


    return (
        <>
            <AdminHeader/>
            <div className="admin-users-wrapper">
                <div className="admin-single-user">
                    <i className="admin-user-eye fa-regular fa-eye"></i>
                    <img src={useravatar} alt=""/>
                    <div>
                        <p>Name: <span>John</span></p>
                        <p>Surname: <span>Doe</span></p>
                        <p>Email: <span>jhon.done@test.com</span></p>
                    </div>
                </div>
            </div>
            <div className="admin-user-details-">
                <i className="admin-user-details-close fa-regular fa-circle-xmark"></i>
                <form action="">
                    <input className="input-modal-address" type="text" placeholder="Full Name" />
                    <input className="input-modal-address" type="email" placeholder="Email" />
                    <input className="input-modal-address" type="password" placeholder="Password" />
                    <input className="input-modal-address" type="number" placeholder="Phone Number" />
                    <input className="input-modal-address" type="text" placeholder="Country" />
                    <input className="input-modal-address" type="text" placeholder="City" />
                    <input className="input-modal-address" type="text" placeholder="Postal Code" />
                    <button className="button-admin-edit" type="submit">EDIT</button>
                </form>
                <div className="admin-users-orders">
                    <p>Orders: <span>3</span></p>
                    <div className="admin-user-last-order">
                        <p>ID: <span>#432123</span></p>
                        <p>TITLE: <span>FIFA 2023</span></p>
                        <p>STATUS: <span>COMPLETED</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};