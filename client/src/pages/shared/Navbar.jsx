import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react'; // Optional: lucide-react for icons
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <nav className="w-full bg-black fixed bg-opacity-40 shadow-sm   z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img
            src={logo} 
            alt="Logo"
            className="h-8"
          />
            <span className="text-white font-bold ml-2">Le CelesteBD</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm font-medium text-white">
          <li><Link to={'/'} className="">Home</Link></li>
          <li><Link to='/menu' className="">Our Menu</Link></li>
          <li><a href="#" className="">Elements</a></li>
          <li><a href="#" className="">Portfolio</a></li>
          <li><a href="#" className="">Blog</a></li>
          <li><a href="#" className="">Shop</a></li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-white">
          <div className="relative">
            <ShoppingCart className="h-5 w-5 " />
            <span className="absolute -top-2 -right-2 bg-gray-300 text-xs rounded-full px-1">0</span>
          </div>
          <Search className="h-5 w-5 " />
          <Menu className="h-5 w-5  " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
