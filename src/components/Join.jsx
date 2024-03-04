import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Join = () => {
  return (
    <NavLink to="/contact" className="hidden lg:block">
      <div className="bg-[#ff9f43] flex items-center gap-3 px-4 py-2 rounded-full text-white font-serif font-bold">
        <button>Join Us</button>
        <span>
          <FaArrowRightLong />
        </span>
      </div>
    </NavLink>
  );
};

export default Join;
