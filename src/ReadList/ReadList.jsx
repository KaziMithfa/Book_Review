import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ShowBooks from "../ShowBooks/ShowBooks";
import { useLocation, useOutletContext } from "react-router-dom";

const ReadList = () => {
  const [readLists, setReadLists] = useState([]);
  const [showLists, setShowLists] = useState([]);
  //   const location = useLocation();
  //   const location = useLocation();
  //   const dataReceived = location.state;

  const dataReceived = useOutletContext();

  //console.log(dataReceived);

  //   const data = location.state;
  //   console.log(data);

  useEffect(() => {
    const storedReadBooks = getBooks("readbooks");
    setReadLists(storedReadBooks);
  }, []);

  useEffect(() => {
    if (dataReceived === "All") {
      setShowLists(readLists);
    } else if (dataReceived === "Rating") {
      const sortedbooks = [...readLists].sort((a, b) => b.rating - a.rating);
      setShowLists(sortedbooks);
    } else if (dataReceived === "Number of Pages") {
      const sortedbooks = [...readLists].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setShowLists(sortedbooks);
    } else if (dataReceived === "Published Year") {
      const sortedbooks = [...readLists].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setShowLists(sortedbooks);
    }
  }, [dataReceived, readLists]);

  return (
    <div className="flex flex-col gap-y-1">
      {showLists.map((showList) => (
        <ShowBooks key={showList.bookId} bookList={showList}></ShowBooks>
      ))}

      {/* {readLists.map((readList) => (
        <ShowBooks key={readList.bookId} bookList={readList}></ShowBooks>
      ))} */}
    </div>
  );
};

export default ReadList;
