import "./MyAccountInfo.css";
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import React, {ChangeEvent, useEffect, useState} from "react";
import {CurrentURL} from "../../../components/CurrentURL/CurrentURL";
import axios from "axios";
import {myAccountTypes} from "../../../types/myAccount.types";


export const MyAccountInfo = () => {

    const [formData, setFormData] = useState<myAccountTypes>({
        password: '',
        passwordRepeat: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    setFormData ({
                        password: 'yourpassword',
                        passwordRepeat: 'yourpassword',
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                    })
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []); // Brak zależności oznacza, że efekt uruchomi się tylko przy montowaniu komponentu

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.passwordRepeat) {
            alert('Hasła nie są identyczne!');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.put('/api/user/update', formData, {
                headers: { /* headers, np. z tokenem autoryzacyjnym */ },
            });

            if (response.status === 200) {
                alert('Profil zaktualizowany pomyślnie!');
                // Dodatkowa logika po pomyślnej aktualizacji
            }
        } catch (error) {
            alert('Wystąpił błąd podczas aktualizacji profilu.');
            console.error('Update error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
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
                        <form onSubmit={handleSubmit} className="account-changes">
                            <div className="account-changes-992">
                                <div className="first-input input-group">
                                    <label htmlFor="firstname">First name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstName || ''}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastName || ''}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                            </div>
                            <div className="account-changes-992">
                                <div className="first-input input-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="passwordRepeat">Password repeat</label>
                                    <input
                                        type="password"
                                        id="passwordRepeat"
                                        name="passwordRepeat"
                                        value={formData.passwordRepeat}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                            </div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            ></input>
                            <button type="submit" disabled={isSubmitting} className="save-changes">SAVE CHANGES</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};