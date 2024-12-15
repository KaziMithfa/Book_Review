//getting the  data

import toast from "react-hot-toast";

export const getBooks = (type) => {
  let books = [];
  const bookList = localStorage.getItem(type);

  if (bookList) {
    books = JSON.parse(bookList);
  }

  return books;
};

// setting the data

export const setBooks = (book, type) => {
  if (type === "readbooks") {
    let bookLists = getBooks(type);

    const isExist = bookLists.find(
      (bookList) => bookList.bookId === book.bookId
    );
    if (isExist) {
      toast.error("the book is already added to readList");
    } else {
      bookLists.push(book);
      localStorage.setItem("readbooks", JSON.stringify(bookLists));
      toast.success("book is added successfully to the readList");
    }
  } else if (type === "wishbooks") {
    let readLists = getBooks("readbooks");

    const isExist = readLists.find(
      (readList) => readList.bookId === book.bookId
    );

    if (isExist) {
      toast.error("the book is already added to readlist");
    } else {
      let bookLists = getBooks(type);

      const isExistWish = bookLists.find(
        (bookList) => bookList.bookId === book.bookId
      );

      if (isExistWish) {
        toast.error("the book is already added to wishList");
      } else {
        bookLists.push(book);
        localStorage.setItem("wishbooks", JSON.stringify(bookLists));
        toast.success("book is added successfully to the wishList");
      }
    }
  }
};
