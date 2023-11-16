import { Link } from "react-router-dom";
import {useState} from "react";
import "./NavBarDesktop.css"
import {useUser} from "../../../contextApi/userProvider";

export const NavBarDesktop = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const { user } = useUser()
    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };


    return (
        <nav className="desktop-nav">
            <ul className="desktop-list">
                <Link className="desktop-item" to='/'>Homepage</Link>
                <Link className="desktop-item" to='/'>Support</Link>
                <Link className="desktop-item-prods desktop-item" to='/products-list'>Products</Link>
                {user && (
                    <li className="desktop-item-submenu" onClick={toggleSubMenu}>
                        My account <i className={`${isSubMenuOpen ? 'desktop-arrow fa-solid fa-caret-up' : 'desktop-arrow fa-solid fa-caret-down'}`}></i>
                        <ul className={`${isSubMenuOpen ? 'desktop-submenu-open' : 'desktop-submenu'}`}>
                            <li className="li-submenu-item"><Link className='desktop-submenu-item' to="/my-account/info/1">My profile</Link></li>
                            <li className="li-submenu-item"><Link className='desktop-submenu-item' to="/my-account/myorders/1">My orders</Link></li>
                            <li className="li-submenu-item"><Link className='desktop-submenu-item' to="/my-account/support/1">Support</Link></li>
                            <li className="li-submenu-item"><Link className='desktop-submenu-item' to="/my-account/wish-list/1">Wish list</Link></li>
                            <li className="li-submenu-item"><Link className='desktop-submenu-item' to="/logout">Log out</Link></li>
                        </ul>
                    </li>
                )}

                {!user && (
                <div className="login-reg-panel">
                    <Link className="login-nav-btn desktop-item" to='/login'>Login</Link>
                    <Link className="register-nav-btn desktop-item" to='/Register'>Register</Link>
                </div>
                )}
            </ul>
        </nav>
    );
};
