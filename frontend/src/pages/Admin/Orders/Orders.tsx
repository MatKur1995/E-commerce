import React, { useState } from 'react';
import './Orders.css'; // Upewnij się, że prawidłowo zaimportowałeś plik CSS
import { Order } from './order'

import fifa from '../../Home/ShopItems/i-fifa-23-gra-pc.png';
import {AdminHeader} from "../../../components/Admin/AdminHeader/AdminHeader";
import {Pagination} from "./Pagination/Pagination";

const ORDERS_MOCK = [
    {id: 1, title: 'Fifa 2023', platform: 'PC', price: '20', status: 'Completed', rate: "3.5"},
    {id: 2, title: 'Fifa 2023', platform: 'PC', price: '20', status: 'Completed', rate: "3.5"},
    {id: 3, title: 'Fifa 2023', platform: 'PC', price: '20', status: 'Completed', rate: "3.5"},
    {id: 4, title: 'Fifa 2023', platform: 'PC', price: '20', status: 'Completed', rate: "3.5"},
    {id: 5, title: 'Fifa 2023', platform: 'PC', price: '20', status: 'Completed', rate: "3.5"},
];


export const Orders = () => {
    const [orders, setOrders] = useState<Order[]>(ORDERS_MOCK);
    const [openOrders, setOpenOrders] = useState<{ [key: number]: boolean }>({});

    const toggleOrderMenu = (id: number) => {
        setOpenOrders(prevOpenOrders => ({
            ...prevOpenOrders,
            [id]: !prevOpenOrders[id]
        }));
    };

    return (
        <>
            <AdminHeader/>
            <div className="orders-header">
                <h3 className="orders-header-title">Orders</h3>
                <p className="orders-header-time">09.11.2023 11:27</p>
            </div>
            <div className="orders-status-wrapper">
                <div className="orders-completed">
                    <i className="orders-completed-check fa-regular fa-square-check"></i>
                    <div>
                        <p className="orders-completed-p">Orders Completed</p>
                        <p className="orders-completed-value">2,312</p>
                    </div>
                </div>
                <div className="orders-pending">
                    <i className="orders-pending-warning fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <p className="orders-completed-p">Orders Pending</p>
                        <p className="orders-completed-value">312</p>
                    </div>
                </div>
                <div className="orders-cancelled">
                    <i className="orders-cancelled-x fa-regular fa-circle-xmark"></i>
                    <div>
                        <p className="orders-completed-p">Orders Cancelled</p>
                        <p className="orders-completed-value">112</p>
                    </div>
                </div>
            </div>
            {orders && orders.map(order =>
                <div key={order.id} className="single-order">
                    <div className="order-menu">
                        <p className="order-id">#{order.id}</p>
                        <i onClick={() => toggleOrderMenu(order.id)} className={`order-arrow ${openOrders[order.id] ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'}`}></i>
                        <i className="order-edit fa-regular fa-pen-to-square"></i>
                    </div>
                    <div className={`order-info ${openOrders[order.id] ? 'open' : ''}`}>
                        <p className="order-product">Product</p>
                        <div className="order-p">
                            <img src={fifa} alt="FIFA 2023"/>
                            <div>
                                <p className="order-product-title">{order.title}</p>
                                <p className="order-product-price">{order.price}zł</p>
                            </div>
                        </div>
                        <div className="admin-order-category">
                            <p className="admin-category">Platform</p>
                            <p className="admin-category-value">{order.platform}</p>
                        </div>
                        <div className="admin-order-status">
                            <p className="admin-status">Status</p>
                            <p className="admin-status-value"><span>{order.status}</span></p>
                        </div>
                        <div className="admin-order-rate">
                            <p className="admin-rate">Rate</p>
                            <p className="admin-rate-value">{order.rate}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="table-container">
                <table>
                    <thead className="order-thead">
                    <tr className="order-tr">
                        <th className="order-th"># ORDER</th>
                        <th className="order-th">TITLE</th>
                        <th className="order-th">PRICE</th>
                        <th className="order-th">RATE</th>
                        <th className="order-th">ORDER STATUS</th>
                        <th className="order-th">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className="order-id order-td">{order.id}</td>
                            <td className="order-td"><div className="order-td-container">
                                <img src={fifa} alt=""/>
                                <p>{order.title}</p>
                            </div></td>
                            <td className="order-td">
                                {order.price} zł
                            </td>
                            <td className="order-td">{order.rate}</td>
                            <td className="order-td">
                                <span className={`status-order-table ${order.status.toLowerCase()}`}>{order.status}</span>
                            </td>
                            <td className="order-td">
                                <i className="edit-icon fa-regular fa-pen-to-square"></i>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </>
    );
};
