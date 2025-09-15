import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  deleteProduct,
  updateProduct,
} from "../../store/actions/productActions";
import { updateUser } from "../../store/actions/userActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.user);

  const product = products?.find((prod) => prod.id === id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: product?.title || "",
      image: product?.image || "",
      price: product?.price || "",
      category: product?.category || "",
      description: product?.description || "",
    },
  });

  if (!product) {
    return (
      <div className="text-center mt-20 text-white text-2xl">
        Product not found.
      </div>
    );
  }

  const updateProductHandler = (updatedProduct) => {
    dispatch(updateProduct(id, updatedProduct));
    toast.success("Product Updated Successfully!", {
      position: "bottom-right",
    });
  };

  const deleteHandler = () => {
    dispatch(deleteProduct(id));
    navigate("/products");
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

  return (
    <>

    {/* details part */}
    { user ?
    (
      <div className="w-full sm:max-w-[900px] mx-auto mt-10 px-4 py-6 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-lg flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <img
            className="w-full h-96 object-contain rounded-lg"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-white/80">{product.description}</p>
          <div className="text-xl font-semibold text-green-400">
            ₹ {product.price}
          </div>
          <div className="text-sm w-fit bg-white text-black inline-block px-3 py-1 rounded-md uppercase tracking-wider">
            {product.category}
          </div>
          <button
          type="button"
          onClick={() => addToCartHandler(product)}
          className="mt-10 cursor-pointer font-light bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-xl hover:text-amber-50"
        >
          Add to cart
        </button>
        </div>
      </div>
      ):  <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20 text-yellow-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 6.5v.01M12 12v.01M12 17v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h2 className="text-3xl font-bold text-white">Please Login First</h2>
    <p className="text-white/70 max-w-md text-lg">
      You need to be logged in to view this product's details.
    </p>
    <button
      onClick={() => navigate("/login")}
      className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl text-lg transition duration-300"
    >
      Go to Login
    </button>
  </div>}


      {/* updated part */}
      {user && user?.isAdmin && (
        <div className="w-full flex items-center justify-center mt-16">
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="w-full max-w-[900px] bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl text-white rounded-3xl px-4 sm:px-10 py-12 flex flex-col gap-6"
          >
            <h2 className="text-4xl mb-4 font-bold text-center">
              Update Product 🛠️
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-lg font-semibold">
                  Product Title
                </label>
                <input
                  {...register("title")}
                  id="title"
                  type="text"
                  placeholder="E.g. Premium Hoodie"
                  className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-lg font-semibold">
                  Image URL
                </label>
                <input
                  {...register("image")}
                  id="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-lg font-semibold">
                  Price (₹)
                </label>
                <input
                  {...register("price")}
                  id="price"
                  type="number"
                  placeholder="E.g. 999"
                  className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-lg font-semibold">
                  Category
                </label>
                <select
                  {...register("category")}
                  id="category"
                  className="px-4 py-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="">Select Category</option>
                  <option value="clothing">Clothing & Apparel</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Food & Beverages</option>
                  <option value="home">Home & Living</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="toys">Toys & Baby Products</option>
                  <option value="books">Books & Stationery</option>
                  <option value="fitness">Fitness & Sports</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg font-semibold">
                Product Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                rows={4}
                placeholder="Describe your product..."
                className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center pt-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 text-xl rounded-2xl"
              >
                Update
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 text-xl rounded-2xl"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
