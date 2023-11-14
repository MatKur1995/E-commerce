import "./HotDeals.css";

import fifa from "../../../Home/ShopItems/i-fifa-23-gra-pc.png"
import React from "react";
import {Pagination} from "./Pagination/Pagination";
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";

export const HotDeals = () => {

    const products = [
        {id: 1, title: 'Fifa 2023', platform: 'PC', price: '20'},
        {id: 2, title: 'Fifa 2023', platform: 'PC', price: '20'},
        {id: 3, title: 'Cyberpunk 2077', platform: 'PC', price: '20'},
        {id: 4, title: 'ELEX 2', platform: 'PC', price: '20'},
        {id: 5, title: 'ELEX 2', platform: 'PC', price: '20'},
        {id: 6, title: 'ELEX 2', platform: 'PC', price: '20'},
        {id: 7, title: 'ELEX 2', platform: 'PC', price: '20'},
    ];

    return (
        <>
            <AdminHeader/>
            <div className="deals-container">
                <h3 className="hot-deal-title">Hot deal's</h3>
                <div className="hot-deals-wrapper">
                    {products && products.map(prod =>
                        <div className="hot-deal">
                            <p className="hot-deals-title">{prod.title}</p>
                            <img src={fifa} alt="" className="hot-deals-img"/>
                            <p className="hot-deals-platform">Platfrom: <span>{prod.platform}</span></p>
                            <p className="hot-deals-platform">Price: <span>{prod.price}zł</span></p>
                            <button className="hot-deal-del">DELETE</button>
                        </div>
                    )}
                </div>
                <div className="all-products">
                    <h3 className="add-hotdeals-title">Add products to Hot-Deal's</h3>
                    <div className="prod-searchbar">
                        <input type="text"/>
                        <i className="deals-search fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="wrapper-deals">
                        {products && products.map(prod =>
                            <div className="hot-deals-items">
                                <p className="items-title">FIFA 2023</p>
                                <img src={fifa} alt="" className="hot-deals-img"/>
                                <p className="hot-deals-platform">Platfrom: <span>{prod.platform}</span></p>
                                <p className="hot-deals-platform">Price: <span>{prod.price}zł</span></p>
                                <button className="hot-deal-add">ADD</button>
                            </div>
                        )}
                    </div>
                </div>
                <Pagination/>
            </div>
        </>
    );
};
