import "./AddAddressModal.css"
import React, {useState} from "react";
import {AddAddressModalTypes} from "./AddAddressModal.types";
import axios from "axios";


export const AddAddressModal: React.FC<AddAddressModalTypes> = ({isOpen, setIsOpen, toggleModal}) => {

    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value);
    const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value);

    const handleAddAddress = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.patch('http://localhost:5000/users/profile/edit', { address, street }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    console.log('Address updated successfully');
                    // Możesz tutaj zamknąć modal i/lub odświeżyć dane użytkownika w interfejsie
                    toggleModal()
                }
            } catch (error) {
                console.error('Error updating address:', error);
            }
        }
    };
    return (
        <div>
            <div className="add-address-container">
                <button className="modal-button" onClick={toggleModal}>Add Address</button>
            </div>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleModal}>×</span>
                        <h2>Add Address</h2>
                        <form onSubmit={handleAddAddress}>
                            {/*<input className="input-modal-address" type="text" placeholder="Full Name"/>*/}
                            {/*<input className="input-modal-address" type="text" placeholder="Phone Number"/>*/}
                            <input
                                className="input-modal-address"
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={handleAddressChange}
                            />
                            <input
                                className="input-modal-address"
                                type="text"
                                placeholder="Street"
                                value={street}
                                onChange={handleStreetChange}
                            />
                            {/*<input className="input-modal-address" type="text" placeholder="Postal Code"/>*/}
                            <button type="submit" className="modal-button-add">Add Address</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
