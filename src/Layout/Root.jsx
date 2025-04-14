import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import Banner from "../Pages/Home/Banner";

const Root = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="bg-[#58a6af] ">
        <div className="flex justify-center items-center h-[80px] md:h-[68px] ">
          <Navbar />
        </div>
      </div>
      {
        pathname == '/' && <Banner />
      }
      <div className="w-11/12 mx-auto mt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
