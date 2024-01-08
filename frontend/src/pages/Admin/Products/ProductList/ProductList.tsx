import "./ProductList.css";

import fifaimg from "../../../Home/ShopItems/i-fifa-23-gra-pc.png"
import {Pagination} from "./Pagination/Pagination";
import {SearchBar} from "./SearchBar/SearchBar";
import {Link} from "react-router-dom";
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";
import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "../../../../types/product.types";
import {Modal} from "./DiscountCodes/Modal/Modal";

export const ProductList = () => {

    const [productList, setProductList] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProductList(response.data.data); // Zakładamy, że response.data jest Product[]
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchData();
    }, [productList]);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };


    const deleteProduct = async (prodId: number) => {
        try {
            const res = await axios.delete(`http://localhost:5000/products/delete/${prodId}`);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    return (
        <>
            <AdminHeader/>
            <div className="product-list-contaainer-mobile">
                <div className="product-list-wrapper">
                    <SearchBar/>
                    {productList && productList.map(product =>
                        <div key={product.id} className="product-wrapper">
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
                                <button onClick={() => deleteProduct(product.id)} className="product-del">DEL</button>
                                <button onClick={() => openModal(product)} className="product-discount"><i onClick={() => openModal(product)} className="fa-solid fa-tag"></i></button>
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
                            {productList && productList.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.platform}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="table-action-edit">EDIT</button>
                                        <button onClick={() => deleteProduct(product.id)} className="table-action-del">DEL</button>
                                        <button onClick={() => openModal(product)} className="product-discount"><i className="fa-solid fa-tag"></i></button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>
                </div>
                {selectedProduct && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        codes={selectedProduct.discountCodes || []}
                        addCode={(code) => {/* logika dodawania kodu */}}
                        removeCode={(index) => {/* logika usuwania kodu */}}
                    />
                )}
                <div className="admin-nav-wrapper">
                </div>

            </div>
        </>
    );
};
