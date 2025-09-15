import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/actions/userActions";

const Checkout = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    alert("Order placed successfully!");
    // Clear the cart
    const updatedUser = { ...user, cart: [] };
    dispatch(updateUser(user.id, updatedUser));
    navigate("/products");
  };

  if (!user || user.cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <h2 className="text-2xl font-semibold mb-4">No items to checkout</h2>
        <button
          onClick={() => navigate("/cart")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm"
        >
          Back to Cart
        </button>
      </div>
    );
  }

  const totalPrice = user.cart.reduce(
    (acc, curr) => acc + Number(curr?.product?.price) * (curr.quantity || 1),
    0
  );

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {user.cart.map((c) => (
              <li key={c?.product?.id} className="flex justify-between">
                <span>{c?.product?.title} (x{c.quantity || 1})</span>
                <span>₹{Number(c?.product?.price) * (c.quantity || 1)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-white/20" />
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span className="text-green-400">₹{totalPrice}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h2 className="text-lg font-semibold mb-4">Shipping & Payment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              >
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-sm font-medium"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
