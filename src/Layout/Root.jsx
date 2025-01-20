import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-[#58a6af] ">
        <div className="flex justify-center items-center h-[128px] md:h-[68px] mb-5">
          <Navbar />
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
