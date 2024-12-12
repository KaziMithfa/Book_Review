import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <h1 className="text-[#131313] text-xs lg:text-xl lg:font-bold font-normal">
              Book Vibe
            </h1>
          </div>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-0 lg:px-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-[#FFF]"
                    : " text-[#131313CC]"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-[#FFF]"
                    : " text-[#131313CC]"
                }
              >
                Linked Books
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-[#FFF]"
                    : " text-[#131313CC]"
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:gap-x-2 gap-x-1 ">
          <button className="bg-[#23BE0A] rounded-lg px-1 py-2 lg:px-5 lg:py-3 text-[#FFF]">
            Sign in
          </button>
          <button className="bg-[#59C6D2] rounded-lg px-1 py-2 lg:px-5 lg:py-3 text-[#FFF]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
