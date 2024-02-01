import "./AdminNavigation.css";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AdminNavigationTypes } from "./AdminNavigation.types";

export const AdminNavigation: React.FC<AdminNavigationTypes> = ({
                                                                    isMenuOpen,
                                                                    setIsMenuOpen,
                                                                    toggleMenu,
                                                                }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);


  const menuStyle = {
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.5s ease-out',
    position: 'fixed' as const, // Użyj as const, aby wskazać, że jest to stała wartość typu string
    top: 0, // Domyślnie TypeScript rozumie to jako 0px
    left: 0, // J.w.
  };

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <>
            <div className={`overlay ${isMenuOpen ? 'overlay-show' : ''}`} onClick={toggleMenu} />
          <div className="admin-navi" style={menuStyle}>
                <i onClick={toggleMenu} className="admin-navi-close fa-solid fa-xmark"></i>
                <h3 className="admin-navi-title">
                    <span>O</span>nline-<span>S</span>hop
                </h3>
                <ul className="admin-navi-list">
                    <li className="admin-navi-item"><Link to="/admin/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link></li>
                    <li className="admin-navi-item" onClick={toggleSubMenu}>
                        <Link to="#" className={`${isSubMenuOpen ? 'no-border' : ''} admin-nav-submenu`}>
                            <i className="fa-solid fa-boxes-stacked"></i> Products
                            <i className={`${isSubMenuOpen ? 'submenu-arrow fa-solid fa-caret-down' : 'submenu-arrow fa-solid fa-caret-right'}`}></i>
                        </Link>
                        {isSubMenuOpen && (
                            <ul className="sub-admin-nav-list">
                                <li className="sub-admin-nav-item"><Link to="/admin/products/add-product">Add Product</Link></li>
                                <li className="sub-admin-nav-item"><Link to="/admin/products/products-list">Product List</Link></li>
                                <li className="sub-admin-nav-item"><Link to="/admin/products/hot-deals">Hot Deals</Link></li>
                                <li className="sub-admin-nav-item"><Link to="/admin/products/discounts">Discounts</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="admin-navi-item"><Link to="/admin/orders"><i className="admin-nav-cart fa-solid fa-cart-shopping"></i> Orders</Link></li>
                    <li className="admin-navi-item"><Link to="/"><i className="fa-solid fa-users"></i> Users</Link></li>
                    <li className="admin-navi-item"><Link to="/"><i className="fa-solid fa-headset"></i> Support</Link></li>
                </ul>
            </div>
        </>
    );
};
