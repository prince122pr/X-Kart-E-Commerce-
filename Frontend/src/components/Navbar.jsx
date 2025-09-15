import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full mb-8 px-6 sm:px-10 py-4 bg-gray-900 rounded-lg text-white shadow-md relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-500">Xkart</h1>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Products
          </NavLink>

          {user?.isAdmin && (
            <NavLink
              to="/admin/create-product"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Create Product
            </NavLink>
          )}

          {user && (
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Cart
            </NavLink>
          )}

          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                Signup
              </NavLink>
            </>
          )}
          <NavLink
            to="/user-profile"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            <CgProfile size={28} />
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 absolute mt-4 flex flex-col gap-4 text-lg  rounded-lg px-6 py-3">
          <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/products" onClick={toggleMenu}>Products</NavLink>

          {user?.isAdmin && (
            <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/admin/create-product" onClick={toggleMenu}>
              Create Product
            </NavLink>
          )}

          {user && (
            <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/cart" onClick={toggleMenu}>Cart</NavLink>
          )}

          {!user && (
            <>
              <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/login" onClick={toggleMenu}>Login</NavLink>
              <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/register" onClick={toggleMenu}>Signup</NavLink>
            </>
          )}

          <NavLink className="hover:bg-gray-900 px-2 py-1 rounded-sm" to="/user-profile" onClick={toggleMenu}>
            <div className="flex items-center gap-2">
              <CgProfile size={25} />
              <span>Profile</span>
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
