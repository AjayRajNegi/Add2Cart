import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  return (
    <div className="sticky bg-white z-[200] top-0 flex flex-col md:flex-row justify-between items-center py-5 md:px-8 lg:px-12">
      <div>
        <Link to="/">
          <p className="text-[30px] md:text-[50px] font-extrabold text-red-500">
            REDSAN
          </p>
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-10">
        <ul className="flex list-none  gap-2 md:gap-5 text-[#49557e] text-lg">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className="cursor-pointer pb-1"
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className="cursor-pointer pb-1"
          >
            menu
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className="cursor-pointer pb-1 hidden sm:block"
          >
            contact
          </a>
        </ul>

        <div className="flex items-center gap-4 md:gap-10">
          <div className="relative">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Cart" />
            </Link>
            <div className="absolute top-[-8px] right-[-8px] w-[10px] h-[10px] bg-red-500 rounded-full"></div>
          </div>

          {/* <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-[#49557e] border border-red-500 px-3 md:px-6 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2] text-sm"
          >
            SignIn
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
