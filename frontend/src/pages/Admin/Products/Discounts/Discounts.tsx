import "./Discounts.css"
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";
import React, {ChangeEvent, useState} from 'react';
import axios from "axios";



export const Discounts = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [discountCode, setDiscountCode] = useState('')
    const [percentage, setPercentage] = useState('')


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'discountCode') {
            setDiscountCode(value);
        } else if (name === 'percentage') {
            setPercentage(value);
        }
    };

    const handleCreateDiscountCode = async () => {
        try {
            const data = {
                code: discountCode,
            };
            const response = await axios.post('http://localhost:5000/discount-codes/create', data);
            console.log('Data sent successfully:', response.data);
            setDiscountCode('');
        } catch (error) {
            console.error('Error during the Axios POST request:', error);
        }
        closeModal();
    };




    return (
        <>
            <AdminHeader/>
            <div className="product-list-contaainer-mobile">
                <div className="product-list-wrapper">
                        <div className="product-wrapper">
                            <div className="product-key-value">
                                <p className="product-key">TITLE</p>
                                <p className="product-value">test</p>
                            </div>
                            <div className="product-key-value">
                                <p className="product-key">IMAGE</p>
                            </div>
                            <div className="product-key-value">
                                <p className="product-key">PLATFORM</p>
                                <p className="product-value">test</p>
                            </div>
                            <div className="product-key-value">
                                <p className="product-key">PRICE</p>
                                <p className="product-value">test</p>
                            </div>
                            <div className="product-actions">
                                <button className="product-edit">EDIT</button>
                                <button className="product-del">DEL</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="products-container-desktop">
                <div className="product-desktop-wrapper">
                    <div className="header-product-list">
                        <h1>Discount codes</h1>
                        <button onClick={openModal} className="product-add-prod"><i
                            className="fa-solid fa-plus"></i> CREATE DISCOUNT CODE</button>
                    </div>
                    <div className="product-wrapper-desktop">
                        <table className="table-product-list">
                            <thead>
                            <tr>
                                <th>Discount code ID</th>
                                <th>Code</th>
                                <th>Discount %</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>321321</td>
                                    <td>FKSADJK321KCA</td>
                                    <td>10%</td>
                                    <td>
                                        <button className="table-action-edit">EDIT</button>
                                        <button className="table-action-del">DEL</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="discount-modal">
                    <div className="discount-modal-content">
                        <span className="discount-modal-close" onClick={closeModal}>&times;</span>
                        <h2>Create Discount Code</h2>
                        <input
                            type="text"
                            name="discountCode"
                            placeholder="Enter discount code"
                            value={discountCode}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="percentage"
                            placeholder="Enter percentage of the discount code"
                            value={percentage}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={handleCreateDiscountCode}
                            className="discount-modal-button"
                        >
                            Create
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}