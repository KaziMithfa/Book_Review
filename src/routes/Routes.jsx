import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import List from "../List/List";
import MainLayout from "../layout/MainLayout";
import Pages from "../Pages/Pages";
import BookCard from "../BookCard/BookCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/books.json"),
      },
      {
        path: "/book/:id",
        element: <BookCard></BookCard>,
        loader: () => fetch("../../public/books.json"),
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
