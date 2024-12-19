import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ShowBooks from "../ShowBooks/ShowBooks";
import { useLocation, useOutletContext } from "react-router-dom";

const WishList = () => {
  const [wishLists, setWishLists] = useState([]);
  const [showLists, setShowLists] = useState([]);

  const dataReceived = useOutletContext();
  // console.log(dataReceived);

  // console.log(`wishlist : ${dataReceived}`);

  useEffect(() => {
    const storedwishBooks = getBooks("wishbooks");
    setWishLists(storedwishBooks);
  }, []);

  useEffect(() => {
    if (dataReceived === "All") {
      setShowLists(wishLists);
    } else if (dataReceived === "Rating") {
      const sortedbooks = [...wishLists].sort((a, b) => b.rating - a.rating);
      setShowLists(sortedbooks);
    } else if (dataReceived === "Number of Pages") {
      const sortedbooks = [...wishLists].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setShowLists(sortedbooks);
    } else if (dataReceived === "Published Year") {
      const sortedbooks = [...wishLists].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setShowLists(sortedbooks);
    }
  }, [dataReceived, wishLists]);

  return (
    <div className="flex flex-col gap-y-1">
      {showLists.map((showList) => (
        <ShowBooks key={showList.bookId} bookList={showList}></ShowBooks>
      ))}
    </div>
  );
};

export default WishList;
