import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
<IoIosArrowDropdownCircle />;

const ListedBooks = () => {
  const [tabIndex, settabIndex] = useState(1);
  const [data, setData] = useState("All");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/listedBooks") {
      setData("All");
    } else if (location.pathname === "/listedBooks/wishList") {
      setData("All");
    }
  }, [location.pathname]);

  const handleClick = (input) => {
    if (input === "Rating") {
      setData(input);
    } else if (input === "Number of Pages") {
      setData(input);
    } else if (input === "Published Year") {
      setData(input);
    }
  };

  //   const handleInputs = (filter) => {

  //   };

  return (
    <div className="container mx-auto">
      <div className=" text-center bg-[#1313130D]">
        <h1 className="text-[#131313] text-2xl font-bold">Books</h1>
      </div>

      <details className="dropdown">
        <summary className="btn flex w-[145px] bg-[#23BE0A] m-1">
          <span className="text-white">Sort By</span>
          <IoIosArrowDropdownCircle className=" text-white"></IoIosArrowDropdownCircle>
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleClick("Rating")}>
            <a>Rating</a>
          </li>

          <li onClick={() => handleClick("Number of Pages")}>
            <a>Number of Pages</a>
          </li>

          <li onClick={() => handleClick("Published Year")}>
            <a>Published Year</a>
          </li>
        </ul>
      </details>

      {/* Tabs */}

      <div role="tablist" className="tabs tabs-lifted">
        <Link
          onClick={() => settabIndex(1)}
          className={` ${tabIndex === 1 ? "tab tab-active" : "tab"}`}
          to=""
          state={data}
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
        <Outlet context={data}></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
