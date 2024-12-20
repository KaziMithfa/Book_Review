import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import List from "../List/List";
import MainLayout from "../layout/MainLayout";
import Pages from "../Pages/Pages";
import BookCard from "../BookCard/BookCard";
import ListedBooks from "../ListedBooks/ListedBooks";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/books.json"),
      },

      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadList></ReadList>,
          },
          {
            path: "wishList",
            element: <WishList></WishList>,
          },
        ],
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
