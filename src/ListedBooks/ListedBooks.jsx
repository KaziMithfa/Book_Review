import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, settabIndex] = useState(1);

  return (
    <div className="container mx-auto">
      <div className=" text-center bg-[#1313130D]">
        <h1 className="text-[#131313] text-2xl font-bold">Books</h1>
      </div>

      <div className="flex justify-center mt-2">
        <h1 className="bg-green-800 text-white">Sort By</h1>
      </div>

      {/* Tabs */}

      <div role="tablist" className="tabs tabs-lifted">
        <Link
          onClick={() => settabIndex(1)}
          className={` ${tabIndex === 1 ? "tab tab-active" : "tab"}`}
          to={"readList"}
          role="tab"
        >
          Read Books
        </Link>
        <Link
          onClick={() => settabIndex(2)}
          className={` ${tabIndex === 2 ? "tab tab-active" : "tab"}`}
          to={"wishList"}
          role="tab"
        >
          Wish Lists
        </Link>
        <Link role="tab" className="tab"></Link>
      </div>

      <div className="mt-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
