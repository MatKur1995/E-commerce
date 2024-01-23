import "./Discounts.css"
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from "axios";
import DiscountCode from "../../../../types/discountCodes.types"



export const Discounts = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [discountCode, setDiscountCode] = useState('')
    const [discountPercentage, setDiscountPercentage] = useState('')
    const [codesList, setCodesList] = useState<DiscountCode[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/discount-codes');
                setCodesList(response.data); // Zakładamy, że response.data jest Product[]
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchData();
    }, [codesList]);

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
            setDiscountPercentage(value);
        }
    };

    const handleCreateDiscountCode = async () => {
        try {
            const data = {
                code: discountCode,
                discountPercentage
            };

            const response = await axios.post('http://localhost:5000/discount-codes/create', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Pobieranie tokena z localStorage
                }
            });

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
                            {codesList && codesList.map(code =>
                                <tr>
                                    <td>{code.id}</td>
                                    <td>{code.code}</td>
                                    <td>{code.discountPercentage}</td>
                                    <td>
                                        <button className="table-action-edit">EDIT</button>
                                        <button className="table-action-del">DEL</button>
                                    </td>
                                </tr>
                            )}
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
                            value={discountPercentage}
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