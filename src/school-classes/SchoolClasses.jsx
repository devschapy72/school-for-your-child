import React, { useEffect } from "react";
import SchoolClassesData from "./SchoolClassesData";
import Aos from "aos";
import "aos/dist/aos.css";
import FormatePrice from "../components/FormatePrice";

const SchoolClasses = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-11/12 xs:w-10/12 mx-auto mt-10">
      <div data-aos="fade-up" data-aos-duration="1400">
        <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-semibold">
          School Classes
        </h2>
        <p
          className="w-11/12 xs:w-10/12 md:w-8/12 lg:w-6/12 mx-auto text-center my-3 font-serif text-sm"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Elementary school classes teach math, language arts, science, and
          social studies through interactive activities, building foundational
          skills crucial for academic and personal growth in young learners
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SchoolClassesData.map((items) => {
          const {
            id,
            image,
            titel,
            teacherImage,
            teacherName,
            category,
            teacherFee,
            age,
            time,
            capacity,
          } = items;
          return (
            <div
              key={id}
              className="hover:-translate-y-5 duration-300"
              data-aos="flip-left"
              data-aos-duration="1200"
            >
              <div className="flex justify-center translate-y-14">
                <figure className="w-48 h-48 border-[10px] border-[#ffcccc] rounded-full overflow-hidden">
                  <img
                    src={image}
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <div className="bg-[#f5d6d6] rounded-lg px-2 py-3">
                <h3 className="text-center font-serif font-semibold text-lg xs:text-xl pt-14 mb-3">
                  {titel}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <figure className="w-16 h-16 border-[2px] rounded-full overflow-hidden">
                      <img
                        src={teacherImage}
                        alt="teacherImages"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="text-sm font-mono font-bold">
                      <h3 className="text-[#e97048]">{teacherName}</h3>
                      <h4>{category}</h4>
                    </div>
                  </div>
                  <p className="bg-[#e97048] text-white text-sm px-6 py-2 font-mono rounded-full">
                    <FormatePrice price={teacherFee} />
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-2 my-3">
                    <div className="w-full h-1 bg-red-500 "></div>
                    <div className="w-full h-1 bg-green-500"></div>
                    <div className="w-full h-1 bg-blue-500 "></div>
                  </div>
                  <div className="grid grid-cols-3 text-center gap-2 text-[12px] xs:text-sm font-serif font-semibold mb-2">
                    <p className="text-red-500">Age :</p>
                    <p className="text-green-500">Time :</p>
                    <p className="text-blue-500">Chapacity :</p>
                  </div>
                  <div className="grid grid-cols-3 text-center">
                    <p>{age}</p>
                    <p>{time}</p>
                    <p>{capacity}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolClasses;
