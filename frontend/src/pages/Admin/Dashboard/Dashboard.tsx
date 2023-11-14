import "./Dashboard.css";

import useravatar from "../../ProductDetails/UsersComments/istockphoto-1337144146-612x612.jpg"
import {Link} from "react-router-dom";
import {AdminHeader} from "../../../components/Admin/AdminHeader/AdminHeader";


const orders = [
    {id: '001', product: 'Widget A', user: 'user@example.com', price: '$19.99', status: 'Pending'},
    {id: '002', product: 'Widget B', user: 'user2@example.com', price: '$29.99', status: 'Completed'},
    {id: '003', product: 'Widget B', user: 'user2@example.com', price: '$29.99', status: 'Closed'},
    {id: '004', product: 'Widget B', user: 'user2@example.com', price: '$29.99', status: 'Completed'},
    {id: '005', product: 'Widget B', user: 'user2@example.com', price: '$29.99', status: 'Pending'},
];

export const Dashboard = () => {


    const getStatusClassName = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'status-completed';
            case 'Pending':
                return 'status-pending';
            case 'Closed':
                return 'status-closed';
            default:
                return '';
        }
    };


    return (
        <div>
            <AdminHeader/>
            <div className="admin-dashboard-container">
                <div className="admin-dashboard">
                    <div className="admin-dashboard-pending">
                        <p className="admin-dashboard-p">Orders pending <span>12</span></p>
                        <i className="clock-pending fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div className="admin-dashboard-completed">
                        <p className="admin-dashboard-p">Orders completed <span>22</span></p>
                        <i className="check-completed fa-regular fa-circle-check"></i>
                    </div>
                    <div className="admin-dashboard-cancelled">
                        <p className="admin-dashboard-p">Orders cancelled <span>8</span></p>
                        <i className="x-cancelled fa-regular fa-circle-xmark"></i>
                    </div>
                    <div className="admin-dashboard-money">
                        <p className="admin-dashboard-p">Today income <span>800$</span></p>
                        <i className="today-money fa-solid fa-money-bill-wave"></i>
                    </div>
                </div>
                <div className="dashboard-activity-container">
                    <div className="dashboard-users">
                        <div className="test999">
                            <p className="dashboard-last-update-p">Users activity</p>
                        </div>
                        <p className="dashboard-users-weekly"><i className="fa-solid fa-calendar-week"></i> Weekly users: <span>322</span></p>
                        <p className="dashboard-users-weekly"><i className="fa-solid fa-calendar-days"></i> Monthly users: <span>922</span></p>
                        <p className="dashboard-users-weekly"><i className="fa-regular fa-calendar"></i> Today users: <span>22</span></p>
                        <p className="dashboard-users-weekly"><i className="fa-solid fa-person"></i> Visits: <span>12,321</span></p>
                    </div>
                    <div className="dashboard-lastupdate">
                        <p className="dashboard-last-update-p">Last update</p>
                        <div className="dashboard-singlecomment">
                            <p className="dashboard-comment-date"><i className="fa-regular fa-clock"></i> 12.12.12</p>
                            <div className="dashboard-avatar-container">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div className="dashboard-title-comment">
                                <p className="dashboard-title"><Link to="#">FIFA 2023</Link></p>
                                <p className="dashboard-comment">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, mollitia?</p>
                            </div>
                        </div>
                        <div className="dashboard-singlecomment">
                            <p className="dashboard-comment-date"><i className="fa-regular fa-clock"></i> 12.12.12</p>
                            <div className="dashboard-avatar-container">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div className="dashboard-title-comment">
                                <p className="dashboard-title"><Link to="#">FIFA 2023</Link></p>
                                <p className="dashboard-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, mollitia?</p>
                            </div>
                        </div>
                        <div className="dashboard-singlecomment">
                            <p className="dashboard-comment-date"><i className="fa-regular fa-clock"></i> 12.12.12</p>
                            <div className="dashboard-avatar-container">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div className="dashboard-title-comment">
                                <p className="dashboard-title"><Link to="#">FIFA 2023</Link></p>
                                <p className="dashboard-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, mollitia?</p>
                            </div>
                        </div>
                        <div className="dashboard-singlecomment">
                            <p className="dashboard-comment-date"><i className="fa-regular fa-clock"></i> 12.12.12</p>
                            <div className="dashboard-avatar-container">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div className="dashboard-title-comment">
                                <p className="dashboard-title"><Link to="#">FIFA 2023</Link></p>
                                <p className="dashboard-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, mollitia?</p>
                            </div>
                        </div>
                        <div className="dashboard-singlecomment">
                            <p className="dashboard-comment-date"><i className="fa-regular fa-clock"></i> 12.12.12</p>
                            <div className="dashboard-avatar-container">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div className="dashboard-title-comment">
                                <p className="dashboard-title"><Link to="#">FIFA 2023</Link></p>
                                <p className="dashboard-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, mollitia?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="dashboard-orders-title">Last 5 orders:</p>
                <div className="orders-table-container-mobile">
                    {orders.map(order => (
                        <div className="order-entry-mobile" key={order.id}>
                            <div className="order-detail-mobile"><b>ID:</b> {order.id}</div>
                            <div className="order-detail-mobile"><b>Product Name:</b> {order.product}</div>
                            <div className="order-detail-mobile"><b>User Email:</b> {order.user}</div>
                            <div className="order-detail-mobile"><b>Price:</b> {order.price}</div>
                            <div className="order-detail-mobile"><b>Status:</b> <span className={getStatusClassName(order.status)}>{order.status}</span></div>
                        </div>
                    ))}
                </div>
                <div className="orders-table-container">
                    <table className="orders-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.id}</td>
                                <td>{order.product}</td>
                                <td>{order.user}</td>
                                <td>{order.price}</td>
                                <td><p className={getStatusClassName(order.status)}>{order.status}</p></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};