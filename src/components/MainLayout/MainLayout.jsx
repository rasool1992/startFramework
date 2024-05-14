import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      {/* Div for fix the fixed Nav */}
      <div className="pt-[120px]"></div>
      <Home />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
