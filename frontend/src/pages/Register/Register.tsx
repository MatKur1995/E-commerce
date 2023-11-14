import "./Register.css";
import {Link} from "react-router-dom";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {RegisterFromData} from "../../types/registerFromTypes";


export const Register = () => {

    const [formData, setFormData] = useState<RegisterFromData>({
        username: '',
        password: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Użyj danych wprowadzonych przez użytkownika zamiast twardo zakodowanych wartości
        const createUserDto = {
            username: formData.username,
            password: formData.password,
        };

        axios.post('http://localhost:5000/users', createUserDto)
            .then(response => {
                if (response.status === 201) {
                    // Resetowanie formularza i ewentualne przekierowanie lub wyświetlenie komunikatu
                    setFormData({
                        username: '',
                        password: ''
                    });
                    // Możesz przekierować użytkownika do logowania lub wyświetlić komunikat o sukcesie
                    console.log('User registered successfully');
                }
            })
            .catch(error => {
                console.log(error);
                // Tutaj obsłuż błędy, np. wyświetlając komunikat
            });
    };


    return (
        <div className="login-992">
            <div className="login-wrapper">
                <h3 className="login-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="login-panel">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-container">
                            <i className="fa fa-user icon-login"></i>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/*<div className="input-container">*/}
                        {/*    <i className="fa-regular fa-envelope icon-login"></i>*/}
                        {/*    <input type="email" id="email" name="email" placeholder="Email" />*/}
                        {/*</div>*/}
                        <div className="input-container">
                            <i className="fa fa-lock icon-login"></i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/*<div className="input-container">*/}
                        {/*    <i className="fa fa-lock icon-login"></i>*/}
                        {/*    <input type="repassword" id="repassword" name="repassword" placeholder="Repat password" />*/}
                        {/*</div>*/}
                        <button type="submit" className="login-button">REGISTER</button>
                    </form>
                    <div className="create-account">
                        <p className="create-account-p">Already have an account?</p>
                        <button className="link-register"><Link to="/login">LOGIN</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};