import {lazy} from 'react';

import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Products from "../pages/Products";
// import UserProfile from "../pages/user/UserProfile";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import CreateProduct from "../pages/admin/CreateProduct";
// import ProductDetails from "../pages/admin/ProductDetails";
// import PageNotFound from "../pages/PageNFound";
// import Cart from "../pages/Cart";

const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const Register = lazy(() => import('../pages/Register'))
const UserProfile = lazy(() => import('../pages/user/UserProfile'))
const Login = lazy(() => import('../pages/Login'))
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'))
const ProductDetails = lazy(() => import('../pages/admin/ProductDetails'))
const PageNotFound = lazy(() => import('../pages/PageNFound'))
const Cart = lazy(() => import('../pages/Cart'))
const Checkout = lazy(() => import('../pages/Checkout'))


const MainRoutes = () => {
  // let {user} = useSelector(s => s.userReducer);
  let user = JSON.parse(localStorage.getItem('user'));  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      
      <Route path="/user-profile" element={<UserProfile />} />

      {
        !user &&
        <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        </>
      }

      {user && user.isAdmin && (
  <Route path="/admin/create-product" element={<CreateProduct />} />
)}

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />

      {
        user &&
        <>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </>
      }
     
    </Routes>
  );
};

export default MainRoutes;
