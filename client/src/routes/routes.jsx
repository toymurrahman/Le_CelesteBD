import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from './../pages/shared/Home';

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
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
