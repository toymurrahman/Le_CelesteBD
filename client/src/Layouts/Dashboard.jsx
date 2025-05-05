import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaCalendarDay,
  FaHome,
  FaMenorah,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import AllButtons from "../components/shared/AllButtons";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex relative min-h-screen">
      <button
        className="sm:hidden absolute top-4 left-4 z-50 bg-black opacity-70 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block absolute sm:static top-0 left-0 z-40 w-64 min-h-screen bg-black opacity-90 text-white uppercase text-lg transition-transform duration-300`}
      >
        <ul className="menu w-full pt-16 sm:pt-0">
          <li>
            <NavLink to="/dashboard/cart">
              <FaHome /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCalendarDay /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaStar /> Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCalendarCheck /> My Booking
            </NavLink>
          </li>
          <div className="flex w-full flex-col">
            <div className="divider divider-info"></div>
          </div>

          <div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaMenorah /> Menu
              </NavLink>
            </li>
          </div>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
