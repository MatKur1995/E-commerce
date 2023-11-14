import "./MyAccountInfo.css";
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import {Link} from "react-router-dom";
import React from "react";
import {CurrentURL} from "../../../components/CurrentURL/CurrentURL";


export const MyAccountInfo = () => {

    return (
        <>
            <CurrentURL/>
            <div className="my-account-info">
                <div className="my-account-info-992">
                    <div className="wrapper-1200">
                        <MyAccountNav/>
                    </div>
                    <div className="info-container">
                        <p className="info-p">My Account</p>
                        <form className="account-changes">
                            <div className="account-changes-992">
                                <div className="first-input input-group">
                                    <label htmlFor="firstname">First name</label>
                                    <input type="text" id="firstname" name="firstname"></input>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last name</label>
                                    <input type="text" id="lastrname" name="lastname"></input>
                                </div>
                            </div>
                            <div className="account-changes-992">
                                <div className="first-input input-group">
                                    <label htmlFor="tel">Telephone</label>
                                    <input type="number" id="tel" name="tel"></input>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="tel">Telephone</label>
                                    <input type="number" id="tel" name="tel"></input>
                                </div>
                            </div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"></input>
                            <button className="save-changes">SAVE CHANGES</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};