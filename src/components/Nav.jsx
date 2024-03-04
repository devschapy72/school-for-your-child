import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import Join from "./Join";

const Nav = () => {
  const [menuBar, setMenuBar] = useState(false);
  const openBar = () => {
    return setMenuBar(!menuBar);
  };

  const closeBar = () => {
    return setMenuBar(!menuBar);
  };
  return (
    <nav className="relative">
      <ul className="hidden lg:flex items-center gap-7 font-serif font-medium text-base">
        <li>
          <NavLink
            to="/"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classes"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pages"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      {menuBar ? (
        <button className="lg:hidden text-xl" onClick={closeBar}>
          <GrClose />
        </button>
      ) : (
        <button className="lg:hidden text-xl" onClick={openBar}>
          <SlMenu />
        </button>
      )}

      <ul
        className="fixed lg:hidden top-16 right-0 w-full xs:w-8/12 sm:w-6/12 h-full bg-gray-50 shadow-xl duration-300 flex flex-col gap-7 text-xl font-serif font-medium justify-center items-center"
        style={{ right: menuBar ? 0 : "-100%" }}
      >
        <li onClick={closeBar}>
          <NavLink
            to="/"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Home
          </NavLink>
        </li>
        <li onClick={closeBar}>
          <NavLink
            to="/about"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            About Us
          </NavLink>
        </li>
        <li onClick={closeBar}>
          <NavLink
            to="/classes"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Classes
          </NavLink>
        </li>
        <li onClick={closeBar}>
          <NavLink
            to="/pages"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Pages
          </NavLink>
        </li>
        <li onClick={closeBar}>
          <NavLink
            to="/contact"
            className="active_color hover:text-[#ff9f43] duration-300"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
