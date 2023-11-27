import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductsList} from "./pages/ProductsList/ProductsList";
import {ProductDetails} from "./pages/ProductDetails/ProductDetails";
import {WishList} from "./pages/WishList/WishList";
import {ShoppingCart} from "./pages/ShoppingCart/ShoppingCart";
import {MyAccountNav} from "./pages/MyAccount/MyAccountNav/MyAccountNav";
import {MyAccountInfo} from "./pages/MyAccount/MyAccountInfo/MyAccountInfo";
import {MyAccountAddress} from "./pages/MyAccount/MyAccountAddress/MyAccountAddress";
import {MyOrders} from "./pages/MyAccount/MyOrders/MyOrders";
import {MyAccountSupport} from "./pages/MyAccount/MyAccountSupport/MyAccountSupport";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {Dashboard} from "./pages/Admin/Dashboard/Dashboard";
import {AddProduct} from "./pages/Admin/Products/AddProduct/AddProduct";
import {ProductList} from "./pages/Admin/Products/ProductList/ProductList";
import {HotDeals} from "./pages/Admin/Products/HotDeals/HotDeals";
import {Orders} from "./pages/Admin/Orders/Orders";
import {Users} from "./pages/Admin/Users/Users";
import {UserProvider} from "./contextApi/userProvider";
import {TotalItemsContext, TotalItemsProvider} from "./contextApi/TotalItemsContext";


function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
        <UserProvider>
        <TotalItemsProvider>
        {!isAdminRoute && <Header title="Dada"/>}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products-list" element={<ProductsList/>}/>
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
            <Route path="/my-account/wish-list/:id" element={<WishList/>}/>
            <Route path="/my-account/cart/" element={<ShoppingCart/>}/>
            <Route path="/my-account/info/:id" element={<MyAccountInfo/>}/>
            <Route path="/my-account/address/:id" element={<MyAccountAddress/>}/>
            <Route path="/my-account/myorders/:id" element={<MyOrders/>}/>
            <Route path="/my-account/support/:id" element={<MyAccountSupport/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/*admin routes*/}

            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            <Route path="/admin/products/add-product" element={<AddProduct/>}/>
            <Route path="/admin/products/products-list" element={<ProductList/>}/>
            <Route path="/admin/products/hot-deals" element={<HotDeals/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/admin/users" element={<Users/>}/>
        </Routes>
        {!isAdminRoute && <Footer/>}
        </TotalItemsProvider>
        </UserProvider>
    </div>
  );
}

export default App;
