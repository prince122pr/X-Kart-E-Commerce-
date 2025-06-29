import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";

import axios from "../api/AxiosConfig";

const Products = () => {
  // const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.user);

  const [products, setProducts] = useState([]); 
  const [hasMore, setHasMore] = useState(true); 

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  let addToCartHandler = (product) => {
    if (!user) {
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    let copyUser = { ...user, cart: [...user.cart] };
    let x = copyUser.cart.findIndex((cart) => cart?.product?.id == product.id);

    if (x === -1) copyUser.cart.push({ product, quantity: 1 });
    else {
      copyUser.cart[x] = {
        product,
        quantity: (copyUser.cart[x].quantity) + 1,
      };
    }

    dispatch(updateUser(copyUser.id, copyUser));

    toast.success(`Added successfully`, {
      position:"bottom-right"
    })
  };

  
// Infinite Scrolling is a technique where new content is automatically loaded as the user scrolls down a webpage, instead of loading everything at once
const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`);

    if (data.length === 0) {
      setHasMore(false);
      // return;
    }

    setProducts([...products, ...data]);
  } catch (error) {
    console.log(error);
  }
};
console.log(hasMore);


  useEffect(()=>{
  fetchProducts();
  },[])

  const renderProducts = products.map((prod) => (
    <div
      key={prod.id}
      className="cursor-pointer pb-4 rounded-2xl shadow-md mb-4 bg-gray-800 hover:shadow-xl hover:shadow-green-400"
    >
      <div onClick={() => handleClick(prod.id)}>
        <img
          src={prod.image}
          alt="Product"
          className="w-full h-[300px] object-cover mb-2 rounded-t-2xl"
        />
        <h1 className="text-xl px-4  font-semibold">{prod.title}</h1>
        <p className="text-white px-4 mb-4">
          {prod.description?.slice(0, 100)}...
        </p>
      </div>

      <div className="mt-2 flex items-center px-4 justify-between">
        <h2 className="text-green-400 font-bold">₹{prod.price}</h2>
        <button
          type="button"
          onClick={() => addToCartHandler(prod)}
          className="cursor-pointer bg-green-500 hover:bg-green-600 text-black font-semibold px-2 py-1 rounded-xl hover:text-amber-50"
        >
          Add to cart
        </button>
      </div>
    </div>
  ));

  return (
    <InfiniteScroll 
       dataLength={products.length}
       next={fetchProducts}
       hasMore={hasMore}
       loader={<p className="text-center py-4 text-green-400">Loading more products...</p>}
       endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
    >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {renderProducts.length > 0 ? renderProducts : <p>No products found.</p>}
    </div>
    </InfiniteScroll>
  );
};

export default Products;
