import "./HotDeals.css";

import fifa from "../../../Home/ShopItems/i-fifa-23-gra-pc.png"
import React, {useEffect, useState} from "react";
import {Pagination} from "./Pagination/Pagination";
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";
import axios from "axios";

interface Product {
    id: number;
    title: string;
    platform: string;
    price: number;
}

export const HotDeals = () => {

    const [hotDeals, setHotDeals] = useState<Product[] | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products/hot-deals');
                setHotDeals(response.data)
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchData();
    }, [hotDeals]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products/non-hot-deals');
                setProducts(response.data);
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchProducts();
    }, [products]);


    const toggleHotDeals = async (productId:number) => {

        try {
            const response = await axios.post('http://localhost:5000/products/hot-deals', { id: productId });
        } catch (error) {
            console.error("Error toggling hot deal status:", error);
        }

    }

    return (
        <>
            <AdminHeader/>
            <div className="deals-container">
                <h3 className="hot-deal-title">Hot deal's</h3>
                <div className="hot-deals-wrapper">
                    {hotDeals && hotDeals.map(prod =>
                        <div key={prod.id} className="hot-deal">
                            <p className="hot-deals-title">{prod.title}</p>
                            <img src={fifa} alt="" className="hot-deals-img"/>
                            <p className="hot-deals-platform">Platfrom: <span>{prod.platform}</span></p>
                            <p className="hot-deals-platform">Price: <span>{prod.price}zł</span></p>
                            <button onClick={() => toggleHotDeals(prod.id)} className="hot-deal-del">DELETE</button>
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
                            <div key={prod.id} className="hot-deals-items">
                                <p className="items-title">FIFA 2023</p>
                                <img src={fifa} alt="" className="hot-deals-img"/>
                                <p className="hot-deals-platform">Platfrom: <span>{prod.platform}</span></p>
                                <p className="hot-deals-platform">Price: <span>{prod.price}zł</span></p>
                                <button onClick={() => toggleHotDeals(prod.id)} className="hot-deal-add">ADD</button>
                            </div>
                        )}
                    </div>
                </div>
                <Pagination/>
            </div>
        </>
    );
};
