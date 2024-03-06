import React from "react";
import { NavLink } from "react-router-dom";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiTwitter, CiLinkedin, CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { MdOutlineNavigateNext } from "react-icons/md";
import SchoolClassesData from "../school-classes/SchoolClassesData";

const Footer = () => {
  return (
    <div className="w-full h-full  bg-gray-700 text-white py-16">
      <div className=" w-10/12 mx-auto grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[12px] xl-text-sm">
        {/* *************************1************** */}
        <div>
          <h2 className="text-lg font-serif mb-3">Get In Touch</h2>
          <div>
            <p className="flex items-center gap-1 hover:underline duration-300 text-[12px] xl-text-sm">
              <span>
                <IoLocationOutline />
              </span>
              6710 Sirajganj, Rajshahi, Bangladesh
            </p>
            <p className="flex items-center gap-1 hover:underline duration-300  my-3">
              <span>
                <IoCallOutline />
              </span>
              +88012 345 67890
            </p>
            <p className=" flex items-center">
              <span>
                <AiOutlineMail />
              </span>
              mail@domain.com
            </p>
            <div className="flex items-center gap-3 mt-3">
              <span className="w-8 h-8 rounded-full bg-[#ff9f43] hover:bg-[#d7a867] duration-300 flex justify-center items-center">
                <CiTwitter />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#ff9f43] hover:bg-[#d7a867] duration-300 flex justify-center items-center">
                <CiLinkedin />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#ff9f43] hover:bg-[#d7a867] duration-300 flex justify-center items-center">
                <CiYoutube />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#ff9f43] hover:bg-[#d7a867] duration-300 flex justify-center items-center">
                <SlSocialFacebook />
              </span>
            </div>
          </div>
        </div>
        {/* *************************2************** */}
        <div>
          <h2 className="text-lg font-serif mb-3">Quick Links</h2>
          <div>
            <h4 className="flex items-center gap-1 hover:underline duration-300 ">
              <span>
                <MdOutlineNavigateNext />
              </span>
              <NavLink to="/about">About Us</NavLink>
            </h4>
            <h4 className="flex items-center gap-1 hover:underline duration-300 my-3">
              <span>
                <MdOutlineNavigateNext />
              </span>
              <NavLink to="/contact">Contact Us</NavLink>
            </h4>
            <h4 className="flex items-center gap-1 hover:underline duration-300">
              <span>
                <MdOutlineNavigateNext />
              </span>
              <NavLink to="/classes">Our Services</NavLink>
            </h4>
            <h4 className="flex items-center gap-1 hover:underline duration-300 my-3">
              <span>
                <MdOutlineNavigateNext />
              </span>
              <NavLink to="*">Terms & Conditions</NavLink>
            </h4>
            <h4 className="flex items-center gap-1 hover:underline duration-300">
              <span>
                <MdOutlineNavigateNext />
              </span>
              Privacy Policy
            </h4>
          </div>
        </div>
        {/* *************************3************** */}
        <div>
          <h2 className="text-lg font-serif mb-3">Photo Gallery</h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 gap-2">
            {SchoolClassesData.map((items) => {
              const { id, image, titel } = items;
              return (
                <div key={id}>
                  <figure className="w-full h-16 border-[3px] rounded-md border-[#ff9f43]">
                    <img
                      src={image}
                      alt={titel}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
        {/* *************************4************** */}
        <div>
          <h2 className="text-lg font-serif">Newsletter</h2>
          <div>
            <p className=" mb-3">
              Stay updated with our school's latest news, events, and
              achievements in our newsletter
            </p>
            <div className="border-2 w-full py-3 flex justify-between gap-2 px-2">
              <input
                type="email"
                name="email"
                placeholder="your email"
                autoComplete="off"
                className="outline-none bg-gray-500 px-2 py-1 text-white w-full"
              />
              <button className="bg-[#ff9f43] px-2  hover:bg-[#f78f2d] duration-300 ">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* UNDERLINE_FOOTER */}
      <div className="w-10/12 mx-auto">
        <hr className="my-5" />
        <div className="flex flex-wrap gap-4 justify-between items-center text-[12px] xl:text-sm">
          <p>© MD SUMON AHMED, All Rights Reserved. Designed By REACT.JS</p>
          <div>
            <ul className="flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className="active_color hover:text-[#ff9f43] duration-30"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="active_color hover:text-[#ff9f43] duration-30"
                >
                  Abot Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className="active_color hover:text-[#ff9f43] duration-30"
                >
                  Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages"
                  className="active_color hover:text-[#ff9f43] duration-30"
                >
                  Pages
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
