import React, { useEffect } from "react";
import SchoolFacilitiesData from "./SchoolFacilitiesData";
import Aos from "aos";
import "aos/dist/aos.css";

const SchoolFacilities = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-10/12 xs:w-11/12 md:w-10/12 mx-auto">
      <h2
        className="text-center my-3 sm:my-5 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-semibold"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        School Facilities
      </h2>
      <p
        className="text-center text-xs xs:text-[13px] sm:text-sm font-light w-11/12 xs:w-10/12 sm:w-8/12 lg:w-6/12 mx-auto mb-10"
        data-aos="fade-up"
        data-aos-duration="1300"
      >
        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
        lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
        dolor duo.
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 ">
        {SchoolFacilitiesData.map((items) => {
          const { id, icone, titel, description } = items;
          return (
            <div
              key={id}
              className="bg-gray-50 shadow-lg py-2 px-2"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <div className=" flex justify-center">
                <span className=" bg-gray-500 text-white text-2xl sm:text-3xl md:text-4xl w-[3rem] sm:w-[5rem] h-[3rem] sm:h-[5rem] rounded-full flex justify-center items-center text-">
                  {icone}
                </span>
              </div>
              <div>
                <h4 className="text-center my-2 text-lg font-serif">{titel}</h4>
                <p className="text-sm font-light">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolFacilities;
