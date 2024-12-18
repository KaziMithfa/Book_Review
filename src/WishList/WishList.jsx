import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ShowBooks from "../ShowBooks/ShowBooks";
import { useLocation, useOutletContext } from "react-router-dom";

const WishList = () => {
  const [wishLists, setWishLists] = useState([]);

  const dataReceived = useOutletContext();
  console.log(dataReceived);

  // console.log(`wishlist : ${dataReceived}`);

  useEffect(() => {
    const storedwishBooks = getBooks("wishbooks");
    setWishLists(storedwishBooks);
  }, []);

  return (
    <div className="flex flex-col gap-y-1">
      {wishLists.map((wishList) => (
        <ShowBooks key={wishList.bookId} bookList={wishList}></ShowBooks>
      ))}
    </div>
  );
};

export default WishList;
