import { useState } from "react";

export default function Navbar() {
  const [checkMenu, setCheckMenu] = useState(false);
  function openMenu() {
    if (innerWidth <= 1024) setCheckMenu(!checkMenu);
    else setCheckMenu(false);
  }
  function hideMenu() {
    setCheckMenu(false);
  }
  return (
    <>
      <header className=" bg-[rgb(44,62,80)] py-[40px] fixed w-full">
        <div className="container flex justify-between items-center text-white">
          <h1 className="text-2xl lg:text-3xl transition-all duration-100 ">
            {`StartFramework`.toUpperCase()}
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
        <div
          onClick={openMenu}
          tabIndex={1}
          className="hamburger bg-[rgb(44,62,80)] absolute top-[40px] right-6 md:right-20 flex flex-col gap-[8px] outline outline-[#243544] p-[10px] rounded-sm cursor-pointer lg:hidden focus:outline-black focus:outline-4"
        >
          <span className="bg-[#232B34] w-[40px] h-[3px]"></span>
          <span className="bg-[#232B34] w-[40px] h-[3px]"></span>
          <span className="bg-[#232B34] w-[40px] h-[3px]"></span>
        </div>

        <nav
          className={`menu-nav text-center mt-6 text-white ${
            checkMenu ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center  px-12 gap-[20px] font-semibold text-lg list-none uppercase lg:hidden">
            <li onClick={hideMenu}>
              <a href="#">About</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">Portfolio</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
