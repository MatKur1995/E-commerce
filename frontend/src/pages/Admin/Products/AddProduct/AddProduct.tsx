import "./AddProduct.css";
import {AdminHeader} from "../../../../components/Admin/AdminHeader/AdminHeader";
import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import { ProductFormData } from "../../../../types/formTypes"


export const AddProduct = () => {

    const [formData, setFormData] = useState<ProductFormData>({
        title: '',
        shortDescription: '',
        longDescription: '',
        platform: '',
        category: '',
        file: null,
        price: 0,
    });

    const [message, setMessage] = useState('')
    const [file, setFile] = useState<File | null>(null);





    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setFile(fileList[0]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('shortDescription', formData.shortDescription);
        data.append('longDescription', formData.longDescription);
        data.append('platform', formData.platform);
        data.append('category', formData.category);
        data.append('price', formData.price.toString());
        if (file) {
            data.append('image', file);
        }

        axios.post('http://localhost:5000/products', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                if (response.status === 201) {
                    setMessage('The product has been successfully added');
                    setFormData({
                        title: '',
                        shortDescription: '',
                        longDescription: '',
                        platform: '',
                        category: '',
                        price: 0,
                    })
                    setTimeout(() => {
                        setMessage('');
                    }, 5000);
                }
            })
            .catch(error => {
                setMessage('The product has not been added')
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            });
    };


    return (
        <>
            <AdminHeader/>
            {message && <div className="add-product-succes-wrapper">
                <p className="add-product-succes">{message}</p>
            </div>}
            <div className="add-prodduct-container">
                <form className="add-product-form" onSubmit={handleSubmit}>
                    <p className="add-product-title">Add new product</p>
                    <div className="form-group">
                        <label htmlFor="productTitle"><i className="fa-solid fa-heading"></i> Title</label>
                        <input
                            type="text"
                            id="productTitle"
                            name="title"
                            placeholder="Enter product title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="shortDescription"><i className="fa-solid fa-align-left"></i> Short
                            Description</label>
                        <textarea
                            id="shortDescription"
                            name="shortDescription"
                            placeholder="Enter a short description of the product"
                            value={formData.shortDescription}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, soluta.</p>*/}
                    {/*<br/>*/}
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis culpa cum cumque cupiditate dignissimos eaque earum fuga fugiat hic magnam maiores molestiae molestias nam necessitatibus nemo perspiciatis, porro praesentium quasi quis quisquam sunt tempora unde velit vero? Animi, hic!</p>*/}

                    <div className="form-group">
                        <label htmlFor="longDescription"><i className="fa-solid fa-align-justify"></i> Long Description</label>
                        <textarea
                            id="longDescription"
                            name="longDescription"
                            placeholder="Enter a detailed description of the product"
                            value={formData.longDescription}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productImage"><i className="fa-solid fa-image"></i> Image File</label>
                        <input
                            type="file"
                            id="productImage"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="platformSelect"><i className="fa-solid fa-gamepad"></i> Platform</label>
                        <select
                            id="platformSelect"
                            name="platform"
                            onChange={handleInputChange}
                            value={formData.platform}
                        >
                            <option value="">Select platform</option>
                            <option value="PC">PC</option>
                            <option value="PS4">PS4</option>
                            <option value="XBOX">XBOX</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="categorySelect"><i className="fa-solid fa-layer-group"></i> Category</label>
                        <select
                            id="categorySelect"
                            name="category"
                            onChange={handleInputChange}
                            value={formData.category}
                        >
                            <option value="">Select category</option>
                            <option value="RPG">RPG</option>
                            <option value="SPORT">Sport</option>
                            <option value="FPS">FPS</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price"><i className="fa-solid fa-tag"></i> Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Enter product price"
                            min="0"
                            step="0.01"
                            onChange={handleInputChange}
                            value={formData.price}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="discount"><i className="fa-solid fa-percent"></i> Discount </label>
                        <input type="number" id="discount" name="discount" placeholder="Enter discount percentage"
                               min="0" max="100"/>
                    </div>

                    <button type="submit" className="submit-button"><i className="fa-solid fa-plus"></i> Add Product
                    </button>
                </form>
            </div>
        </>
    );
};