import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      {/* Div for fix the fixed Nav */}
      <div className="pt-[120px] bg-main-color"></div>

      <Outlet></Outlet>
      <Footer />
    </>
  );
}
