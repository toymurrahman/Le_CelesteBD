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
import Payment from "./../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/shared/Error/ErrorPage";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import About from "../pages/About/About";
import UserHome from "../pages/Dashboard/UserHome.jsx/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ReservationForm from "../pages/Reservation/ReservationForm";
import ReservationHistory from "../pages/Dashboard/Reservation/ReservationHistory";
import UserReservation from "../pages/Dashboard/UserHome.jsx/UserReservation";
import TermsPage from "../pages/TermsPage/TermsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
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
      {
        path: "reservation",
        element: <ReservationForm />,
      },
      {
        path: "terms",
        element: <TermsPage />,
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
    errorElement: <ErrorPage />,
    children: [
      // users routes
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <CartD />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "userReservation",
        element: <UserReservation />,
      },

      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
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
        path: "reservationHistory",
        element: <AdminRoutes>
          <ReservationHistory />
        </AdminRoutes>,
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
