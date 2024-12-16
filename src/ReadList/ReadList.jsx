import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ShowBooks from "../ShowBooks/ShowBooks";

const ReadList = () => {
  const [readLists, setReadLists] = useState([]);

  useEffect(() => {
    const storedReadBooks = getBooks("readbooks");
    setReadLists(storedReadBooks);
  }, []);

  return (
    <div className="flex flex-col gap-y-1">
      {readLists.map((readList) => (
        <ShowBooks key={readList.bookId} bookList={readList}></ShowBooks>
      ))}
    </div>
  );
};

export default ReadList;
