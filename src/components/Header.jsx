import React from "react";
import Nav from "./Nav";
import Join from "./Join";
import { FaBookOpenReader } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 shadow-lg flex  justify-between items-center px-5 xs:px-8 sm:px-16">
      <NavLink to="/">
        <div className="flex gap-2 items-center">
          <span className="text-4xl text-[#ff9f43]">
            <FaBookOpenReader />
          </span>
          <span className="text-xl font-serif font-bold bg-blue-600 px-2 py-1 text-white">
            Kider
          </span>
        </div>
      </NavLink>
      <Nav />
      <Join />
    </div>
  );
};

export default Header;
