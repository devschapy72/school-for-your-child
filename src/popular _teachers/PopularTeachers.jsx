import React from "react";
import PopularTeachersData from "./PopularTeachersData";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const PopularTeachers = () => {
  return (
    <div className="mt-14 w-10/12 mx-auto">
      <h2
        className="text-center font-serif font-semibold text-xl xs:text-2xl sm:text-3xl my-3"
        data-aos="fade-up"
        data-aos-duration="12000"
      >
        Popular Teachers
      </h2>
      <p
        className="text-xs xs:text-sm font-serif w-11/12 xs:w-10/12  lg:w-7/12 mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1600"
      >
        Esteemed teacher renowned for their passion, innovation, and unwavering
        commitment to student growth. Their dynamic teaching style and genuine
        care for each student create a nurturing learning environment cherished
        by the entire school community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {PopularTeachersData.map((items) => {
          const { id, name, image, designation } = items;
          return (
            <div
              key={id}
              className="w-full h-[15rem] border-2 mb-28 "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <figure className="w-full h-full">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="w-[11rem] h-[11rem] border-[15px] rounded-full flex justify-center items-center flex-col -translate-y-16 bg-gray-50 hover:border-[#ff9f43] duration-300">
                <h3 className="text-xl font-serif">{name}</h3>
                <p className="text-sm">{designation}</p>
                <div className="flex items-center gap-3 my-3">
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-[#f47149] hover:bg-[#ff9f43] duration-300 text-white">
                    <FaFacebookF />
                  </span>
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-[#f47149] hover:bg-[#ff9f43] duration-300 text-white">
                    <FaInstagram />
                  </span>
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-[#f47149] hover:bg-[#ff9f43] duration-300 text-white">
                    <FaTwitter />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTeachers;
