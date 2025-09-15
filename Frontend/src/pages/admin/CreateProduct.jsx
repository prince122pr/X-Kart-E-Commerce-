import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    product.cart = [];
    dispatch(createProduct(product));
    toast.success("Product Created Successfully!", {
      position: "bottom-right",
    });
    navigate("/products");
  };

  return (
    <div className="w-full flex items-center justify-center mt-8">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full sm:max-w-[900px] bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl text-white rounded-3xl px-4 sm:px-10 py-12 flex flex-col gap-6"
      >
        <h2 className="text-4xl mb-4 font-bold text-center">
          Add New Product 🛒
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
              placeholder="E.g. Classic Cotton T-Shirt"
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
              placeholder="https://example.com/product.jpg"
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
              placeholder="499"
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
            placeholder="Write a short product description..."
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 cursor-pointer bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-xl transition duration-300"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
