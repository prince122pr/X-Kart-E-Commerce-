import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/actions/userActions";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  let dispatch = useDispatch();


  if (user.cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <h2 className="text-2xl font-semibold mb-4">🛒 Your cart is empty</h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm"
        >
          🛍️ Continue Shopping
        </button>
      </div>
    );
  }

  //   const totalPrice = user.cart.reduce(
  //     (acc, curr) => acc + Number(curr.product.price),
  //     0
  //   );
 let totalPrice = 0;
user.cart.forEach((c) => {
  totalPrice += Number(c?.product?.price) * (c.quantity || 1);
});


 const handleIncQuantity = (i) => {
  let copyUser = { ...user, cart: [...user.cart] };

  copyUser.cart[i] = {
    ...copyUser.cart[i],
    quantity: (copyUser.cart[i].quantity) + 1,
  };

  dispatch(updateUser(copyUser.id, copyUser));
};
  
const handleDecQuantity = (i) => {
  let copyUser = { ...user, cart: [...user.cart] };

  if ((copyUser.cart[i].quantity) > 1) {
    copyUser.cart[i] = {
      ...copyUser.cart[i],
      quantity: copyUser.cart[i].quantity - 1,
    };
  } else {
    // Remove just that item
    copyUser.cart.splice(i, 1);
  }

  dispatch(updateUser(copyUser.id, copyUser));
};


  return (
    <div className="px-4 py-8 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <ul className="space-y-4">
        {user.cart.map((c, index) => (
          <li
            key={c?.product?.id}
            className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/10"
          >
            <img
              src={c?.product?.image}
              alt={c?.product?.title}
              className="w-16 h-16 object-contain bg-white rounded-md p-1"
            />

            <div className="flex-1">
              <h2 className="text-base font-medium">{c?.product?.title}</h2>
              <p className="text-xs text-white/60 line-clamp-2">
                {c?.product?.description}
              </p>
              <div className="text-sm text-green-400 mt-1">
                ₹{c?.product?.price}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-3 py-1 rounded-full">
              <button onClick={() => handleDecQuantity(index)}
                type="button"
                className="cursor-pointer text-white text-lg w-7 h-7 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
              >
                −
              </button>

              <span className="text-white text-sm font-semibold px-2">
                {c.quantity}
              </span>

              <button onClick={() => handleIncQuantity(index)}
                type="button"
                className="cursor-pointer text-white text-lg w-7 h-7 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-right">
        <h2 className="text-lg font-semibold">
          🧾 Total: <span className="text-green-400">₹{totalPrice}</span>
        </h2>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-sm font-medium"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
