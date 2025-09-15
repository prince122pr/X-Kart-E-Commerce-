import { useEffect } from "react";

import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { curentUser } from "./store/actions/userActions";
import { loadProducts } from "./store/actions/productActions";
import MainRoutes from "./routes/MainRoutes";

// import axios from "./api/AxiosConfig"

const App = () => {

  let {user} = useSelector(s => s.userReducer)
  let {products} = useSelector(s => s.productReducer)

  let dispatch = useDispatch();

  useEffect(()=>{
    !user && dispatch(curentUser());
    
  },[user])
  
  useEffect(()=>{
    products.length == 0 && dispatch(loadProducts())
  }, [products])

  return (
    <div className="w-full min-h-screen px-4 sm:px-8 py-5 text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black font-light">
       <Navbar/>
       <MainRoutes/>
    </div>
  )
}

export default App