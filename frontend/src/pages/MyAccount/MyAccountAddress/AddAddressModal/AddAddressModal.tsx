import "./AddAddressModal.css"
import React, {useState} from "react";
import {AddAddressModalTypes} from "./AddAddressModal.types";


export const AddAddressModal: React.FC<AddAddressModalTypes> = ({isOpen,setIsOpen, toggleModal}) => {


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
                        <input className="input-modal-address" type="text" placeholder="Full Name" />
                        <input className="input-modal-address" type="text" placeholder="Phone Number" />
                        <input className="input-modal-address" type="text" placeholder="Country" />
                        <input className="input-modal-address" type="text" placeholder="City" />
                        <input className="input-modal-address" type="text" placeholder="Postal Code" />
                        <textarea className="input-modal-address" placeholder="Address"></textarea>
                            <button className="modal-button-add" onClick={toggleModal}>Add Address</button>
                    </div>
                </div>
            )}
        </div>
    );
};
