import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import AllButtons from "../../components/shared/AllButtons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = false; // replace this with actual user state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full mx-auto shadow-sm bg-black fixed bg-opacity-40 z-50">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
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
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4 text-white">
          <div className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-gray-300 text-xs rounded-full px-1">
              0
            </span>
          </div>
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

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-40% bg-black text-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <X className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col p-4 space-y-4 uppercase text-sm font-medium">
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
            <a href="#" onClick={toggleMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              Shop
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
