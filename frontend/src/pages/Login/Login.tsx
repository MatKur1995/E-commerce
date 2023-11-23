import React, {ChangeEvent, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useUser} from "../../contextApi/userProvider";
import "./Login.css"

export const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { setUser } = useUser(); // Użyj hooka useUser

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/login", credentials);
            const { access_token, username, userId } = response.data;
            localStorage.setItem("token", access_token);
            localStorage.setItem("userId", userId);
            setUser({ username, userId });
            if(response.status == 200) {
                window.location.href = '/';
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="login-992">
            <div className="login-wrapper">
                <h3 className="login-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="login-panel">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <i className="fa fa-user icon-login"></i>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock icon-login"></i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            LOGIN
                        </button>
                    </form>
                    <div className="create-account">
                        <p className="create-account-p">Don't have an account?</p>
                        <button className="link-register"><Link to="/register">CREATE ACCOUNT</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};