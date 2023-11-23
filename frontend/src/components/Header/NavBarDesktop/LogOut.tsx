import {Link} from "react-router-dom";

export const LogOut = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.href = '/';
    };

    return (
        <>
            <li onClick={handleLogout} className="li-submenu-item"><Link className='desktop-submenu-item' to="/logout">Log out</Link></li>
        </>
    )
}