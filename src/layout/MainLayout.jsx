import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-[calc(100vh - 80px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
