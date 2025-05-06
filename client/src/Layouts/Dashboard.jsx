import React, { useState } from "react";
import {
  FaBookDead,
  FaCalendarCheck,
  FaCalendarDay,
  FaHome,
  FaList,
  FaMailchimp,
  FaMenorah,
  FaShoppingCart,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAdmin] = useAdmin() ;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex relative min-h-screen">
      <button
        className="sm:hidden absolute top-4 left-4 z-50 bg-emerald-600  text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block absolute sm:static top-0 left-0 z-40 w-64 min-h-screen bg-emerald-600  text-white uppercase text-lg transition-transform duration-300`}
      > 
      <h2 className="text-center text-xl font-bold pt-10 pb-10">Le CelesteBd</h2>
        <ul className="menu w-full pt-16 sm:pt-0">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                <GiForkKnifeSpoon /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaBookDead /> Manage Booking
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          <div className="flex w-full flex-col">
            <div className="divider divider-info"></div>
          </div>

          {/* Navlinks */}
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
            <li>
              <NavLink to="/reservation">
                <FaMailchimp /> Reservation
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
