import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import AllButtons from "../../components/shared/AllButtons";
import useAuth from "../../hooks/useAuth";
import useSmallDevice from "../../hooks/useSmallDevice";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const isSmallDevice = useSmallDevice();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full mx-auto shadow-sm bg-black fixed bg-opacity-40 z-50">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-white font-bold ml-2">Le CelesteBD</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm font-medium text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>

        <div className="flex items-center space-x-4 text-white">
          <Link to="/dashboard/cart">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-3 bg-black opacity-80 text-xs rounded-full px-2">
                {cart.length}
              </span>
            </div>
          </Link>
          <Search className="h-5 w-5" />
          {user ? (
            <Menu className="h-5 w-5 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Link to="/login">
              <AllButtons variant="bannar-button" text="Login" />
            </Link>
          )}
        </div>
      </div>

      {/* Toggle Menu */}
      {user && (
        <div
          className={`fixed top-0 right-0 w-64 h-auto bg-black opacity-90 text-white z-50 md:z-50 lg:z-90 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2></h2>
            <X className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
          </div>

          <ul className="flex flex-col p-4 space-y-4 uppercase text-sm font-medium">
            {isSmallDevice ? (
              <>
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" onClick={toggleMenu}>
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link to="/order" onClick={toggleMenu}>
                    Order
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={toggleMenu}>
                    Blog
                  </a>
                </li>
                
              </>
            ) : null}
            {
                  isAdmin ? (
                    <li>
                      <Link to="/dashboard/adminHome" onClick={toggleMenu}>
                        Dashboard
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/dashboard/userHome" onClick={toggleMenu}>
                        Dashboard
                      </Link>
                    </li>
                  )
                }
            <li>
              <button
                onClick={() => {
                  logOut();
                  toggleMenu();
                }}
                className="text-left text-red-400 hover:text-red-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
