import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  // const user = useSelector((state) => state.userReducer?.user);
  let user = JSON.parse(localStorage.getItem('user'));  

  return (
    <nav className="w-full mb-8 flex items-center justify-between px-10 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-500">Xkart</h1>

      {/* Links */}
      <div className="flex gap-10 text-xl items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/products"
        >
          Products
        </NavLink>

        {/* Only for Admin */}
        {user && user.isAdmin && (
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            to="/admin/create-product"
          >
            Create Product
          </NavLink>
        )}

        {/* add to cart */}
      {
        user && <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-green-500" : "")}>Cart</NavLink>
      }

        {/* Only if user not logged in */}
        {!user && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
              to="/register"
            >
              Signup
            </NavLink>
          </>
        )}
      </div>

      {/* Profile Icon */}
      <NavLink
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
        to="/user-profile"
      >
        <CgProfile size={35} />
      </NavLink>

      
    </nav>
  );
};

export default Navbar;
