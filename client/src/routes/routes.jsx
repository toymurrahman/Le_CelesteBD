import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
