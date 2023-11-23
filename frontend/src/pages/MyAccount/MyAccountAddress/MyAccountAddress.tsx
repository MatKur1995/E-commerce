import "./MyAccountAddress.css"
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import React, {useEffect, useState} from "react";
import {AddAddressModal} from "./AddAddressModal/AddAddressModal";
import {HeaderProps} from "../../../components/Header/Header.types";
import {AddAddressModalTypes} from "./AddAddressModal/AddAddressModal.types";
import {CurrentURL} from "../../../components/CurrentURL/CurrentURL";
import { useUser } from '../../../contextApi/userProvider'
import axios from "axios";
import {myAccountAddress, myAccountTypes} from "../../../types/myAccount.types";


export const MyAccountAddress = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState<myAccountAddress | null>(null);

    const { user } = useUser(); // Używasz hooka useUser, aby uzyskać dostęp do danych użytkownika

    useEffect(() => {
        console.log(user?.username); // Tutaj logujesz dane użytkownika
    }, [user]);

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
                    setAddress(response.data)
                    console.log(response.data)
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="wrapper-adress">
            <CurrentURL/>
            <div className="adress-wrapper">
                <div className="wrapper-1200">
                    <MyAccountNav/>
                </div>
                <div className="address-container">
                    <h2>My Address</h2>
                    {address && (
                        <div className="card">
                            <h3>{address.firstName} {address.lastName}</h3>
                            <p>{address.address}</p>
                            <p>{address.street}</p>
                            <div className="icons">
                                <span onClick={toggleModal}>🖊️</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <AddAddressModal isOpen={isOpen} toggleModal={toggleModal}/>
        </div>
    );
};