import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className=" max-w-[1280px] mx-auto lg:px-10">
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
