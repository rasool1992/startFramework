import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [checkMenu, setCheckMenu] = useState(false);
  const [checkScrollY, setCheckScrollY] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (e.currentTarget.scrollY >= 31) {
        setCheckScrollY(true);
      } else {
        setCheckScrollY(false);
      }
    });
  }, []);
  function openMenu() {
    if (innerWidth <= 1024) setCheckMenu(!checkMenu);
    else setCheckMenu(false);
  }
  function hideMenu() {
    setCheckMenu(false);
  }
  return (
    <>
      <header className="fixed w-full z-40">
        <div className="desktop-menu bg-main-color">
          <div
            className={`container py-[40px]  flex justify-between items-center text-white overflow-hidden transition-all duration-75 ${
              checkScrollY ? "h-[75px]" : "h-[120px]"
            }`}
          >
            <h1 className="text-2xl lg:text-3xl transition-all duration-75 font-semibold">
              <Link to="">{`StartFramework`.toUpperCase()}</Link>
            </h1>
            <nav>
              <ul className=" gap-10 hidden lg:flex font-semibold text-lg list-none uppercase">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Hamburger Menu */}
          <div
            onClick={openMenu}
            tabIndex={1}
            className={`hamburger bg-main-color absolute  right-[60px] sm:right-[100px] md:right-28 flex flex-col  gap-[8px] outline outline-[#243544] p-[10px] rounded-sm cursor-pointer lg:hidden focus:outline-black focus:outline-4 transition-all duration-150 ${
              checkScrollY ? "top-[18px] " : "top-8"
            }`}
          >
            <span className="bg-hamburger w-[40px] h-[3px]"></span>
            <span className="bg-hamburger w-[40px] h-[3px]"></span>
            <span className="bg-hamburger w-[40px] h-[3px]"></span>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="mobile-menu  bg-main-color">
          <nav
            className={`animate-menu bg-main-color w-full fixed text-center -z-50 text-white ${
              checkMenu ? "block" : "hidden "
            } `}
          >
            <ul className="container flex flex-col items-start sm:px-12 md:px-14 gap-[20px] font-semibold text-lg list-none uppercase lg:hidden pb-2.5">
              <li onClick={hideMenu}>
                <NavLink to="about">About</NavLink>
              </li>
              <li onClick={hideMenu}>
                <NavLink to="portfolio">Portfolio</NavLink>
              </li>
              <li onClick={hideMenu}>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
