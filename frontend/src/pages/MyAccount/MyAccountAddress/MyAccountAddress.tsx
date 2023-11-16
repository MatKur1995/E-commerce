import "./MyAccountAddress.css"
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import React, {useEffect, useState} from "react";
import {AddAddressModal} from "./AddAddressModal/AddAddressModal";
import {HeaderProps} from "../../../components/Header/Header.types";
import {AddAddressModalTypes} from "./AddAddressModal/AddAddressModal.types";
import {CurrentURL} from "../../../components/CurrentURL/CurrentURL";
import { useUser } from '../../../contextApi/userProvider'


export const MyAccountAddress = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { user } = useUser(); // Używasz hooka useUser, aby uzyskać dostęp do danych użytkownika

    useEffect(() => {
        console.log(user?.username); // Tutaj logujesz dane użytkownika
    }, [user]);

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
                    <div className="card">
                        <h3>John Doe</h3>
                        <p>Olavarría, Buenos Aires</p>
                        <p>7400</p>
                        <p>Av. Colón 0101</p>
                        <p>(+01)1234567890</p>
                        <div className="icons">
                            <span>🖊️</span>
                            <span>🗑️</span>
                        </div>
                    </div>
                    <div className="card">
                        <h3>John Doe</h3>
                        <p>Olavarría, Buenos Aires</p>
                        <p>7400</p>
                        <p>Av. Colón 0101</p>
                        <p>(+01)1234567890</p>
                        <div className="icons">
                            <span>🖊️</span>
                            <span>🗑️</span>
                        </div>
                    </div>
                </div>
            </div>
            <AddAddressModal isOpen={isOpen} toggleModal={toggleModal}/>
        </div>
    );
};