import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-3 text-center">
      <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-serif">
        Oops! Something went wrong. Please try again later
      </h2>
      <NavLink to="/">
        <button className="my-5 sm:my-7 md:my-10 bg-[#ff9f43] px-14 py-3.5 text-white border-2 border-[#ff9f43] hover:bg-transparent hover:text-black duration-300 outline-none">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
