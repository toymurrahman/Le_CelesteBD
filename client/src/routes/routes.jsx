import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Auth/Login";
import SignUp from "./../pages/Auth/SignUp";
import Dashboard from "../Layouts/Dashboard";

import PrivateRoute from "./private/PrivateRoute";
import CartD from "../pages/Dashboard/Cart/CartD";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./Admin/AdminRoutes";
import Additems from "../pages/Dashboard/AddItems/Additems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/ManageItems/UpdateItem";
import Dekore from "./Admin/Dekore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },

      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // users routes
      {
        path: "cart",
        element: <CartD />,
      },
      // admin routes
      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <Additems />
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems />
          </AdminRoutes>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem />
          </AdminRoutes>
        ),

        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`),
      },
    ],
  },
]);
