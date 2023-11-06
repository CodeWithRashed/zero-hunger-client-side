import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-gray-900">
      <Nav></Nav>
      <div className="font-rubik px-[5%] mt-5 ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
