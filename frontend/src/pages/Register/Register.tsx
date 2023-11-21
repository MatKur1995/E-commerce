import "./Register.css";
import {Link} from "react-router-dom";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {RegisterFromData} from "../../types/registerFromTypes";


export const Register = () => {

    const [formData, setFormData] = useState<RegisterFromData>({
        username: '',
        password: '',
        firstName: null,
        lastName: null,
        email: '',
        emailRepeat: '',
        address: null,
        street: null,

    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value !== '' ? value : null, // Jeśli pole jest puste, przypisz null
        });
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Użyj danych wprowadzonych przez użytkownika zamiast twardo zakodowanych wartości
        const createUserDto = {
            username: formData.username,
            password: formData.password,
            email: formData.email,
            emailRepeat: formData.emailRepeat,
            firstName: formData.firstName || null,
            lastName: formData.lastName || null,
            address: formData.address || null,
            street: formData.street || null,
        };

        axios.post('http://localhost:5000/users', createUserDto)
            .then(response => {
                if (response.status === 201) {
                    // Resetowanie formularza i ewentualne przekierowanie lub wyświetlenie komunikatu
                    setFormData({
                        username: '',
                        password: '',
                        firstName: null,
                        lastName: null,
                        email: '',
                        emailRepeat: '',
                        address: null,
                        street: null,
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
        <div className="register-992">
            <div className="login-wrapper">
                <h3 className="login-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="login-panel">
                    <form onSubmit={handleSubmit} className="reg-form login-form">
                        <div className="test-1">
                            <div className="reg-container-inputs">
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username *"
                                        value={formData.username}
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
                                        placeholder="Password *"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="reg-container-inputs">
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="email"
                                        id="emailRepeat"
                                        name="emailRepeat"
                                        placeholder="Repeat email *"
                                        value={formData.emailRepeat}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="test-2">
                            <div className="reg-container-inputs">
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName || ''}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName || ''}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="reg-container-inputs">
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address || ''}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-user icon-login"></i>
                                    <input
                                        type="text"
                                        id="street"
                                        name="street"
                                        placeholder="Street"
                                        value={formData.street || ''}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
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