import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import List from "../List/List";
import MainLayout from "../layout/MainLayout";
import Pages from "../Pages/Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/list",
        element: <List></List>,
      },
      {
        path: "/pages",
        element: <Pages></Pages>,
      },
    ],
  },
]);
