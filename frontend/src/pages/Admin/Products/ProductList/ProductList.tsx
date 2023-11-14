import "./ProductList.css";

import fifaimg from "../../../Home/ShopItems/i-fifa-23-gra-pc.png"
import {Pagination} from "./Pagination/Pagination";
import {SearchBar} from "./SearchBar/SearchBar";
import {Link} from "react-router-dom";
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";

export const ProductList = () => {
    const products = [
        {id: 1, title: 'Fifa 2023', platform: 'PC', price: '20$'},
        {id: 2, title: 'Fifa 2023', platform: 'PC', price: '20$'},
        {id: 3, title: 'Cyberpunk 2077', platform: 'PC', price: '20$'},
        {id: 4, title: 'ELEX 2', platform: 'PC', price: '20$'},
        // Dodaj tutaj inne produkty...
    ];

    return (
        <>
            <AdminHeader/>
            <div className="product-list-contaainer-mobile">
                <div className="product-list-wrapper">
                    <SearchBar/>
                    {products && products.map(product =>
                        <div className="product-wrapper">
                            <div className="product-key-value">
                                <p className="product-key">TITLE</p>
                                <p className="product-value">{product.title}</p>
                            </div>
                            <div className="product-key-value">
                                <p className="product-key">IMAGE</p>
                                <p className="product-value"><img src={fifaimg} alt=""/></p>
                            </div>
                            <div className="product-key-value">
                                <p className="product-key">PLATFORM</p>
                                <p className="product-value">{product.platform}</p>
                            </div>
                            <div className="product-key-value">
                                <p className="product-key">PRICE</p>
                                <p className="product-value">{product.price}</p>
                            </div>
                            <div className="product-actions">
                                <button className="product-edit">EDIT</button>
                                <button className="product-del">DEL</button>
                                <button className="product-discount"><i className="fa-solid fa-tag"></i></button>
                            </div>
                        </div>
                    )}
                    <Pagination/>
                </div>
            </div>
            <div className="products-container-desktop">
                <div className="product-desktop-wrapper">
                    <div className="header-product-list">
                        <h1>Products</h1>
                        <button className="product-add-prod"><Link to="/admin/products/add-product"><i
                            className="fa-solid fa-plus"></i> ADD PRODUCT</Link></button>
                    </div>
                    <div className="product-wrapper-desktop">
                        <SearchBar/>
                        <table className="table-product-list">
                            <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.platform}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="table-action-edit">EDIT</button>
                                        <button className="table-action-del">DEL</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>
                </div>
                <div className="admin-nav-wrapper">
                </div>
            </div>
        </>
    );
};
