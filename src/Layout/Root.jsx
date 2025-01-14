import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/> 
            <div className="h-[calc(100vh-334px)]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;