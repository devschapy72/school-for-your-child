import React from "react";
import OurClientsData from "./OurClientsData";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const OurClients = () => {
  return (
    <div className="w-11/12 sm:w-10/12 mx-auto mt-14">
      <h2
        className="text-3xl font-serif font-medium text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1400"
      >
        Our Clients Say!
      </h2>
      <p
        className="text-center w-11/12 xs:w-10/12 lg:w-8/12 mx-auto my-3 text-sm sm:text-base"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1700"
      >
        Our clients rave about our service! They appreciate our dedication and
        quality work. Thank you for making a positive impact on their
        experience. We look forward to continuing to exceed expectations
      </p>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mt-10 px-10 hidden lg:block"
      >
        {OurClientsData.map((items) => {
          const { id, name, image, description, clientName } = items;
          return (
            <SwiperSlide key={id} className="bg-[#ffcccc] w-full  py-5">
              <p className="px-10 text-lg my-3">{description}</p>
              <div className="bg-white flex justify-between items-center ml-16 my-5 rounded-sm">
                <figure className="h-12 w-12 border-[4px] border-[#feabab] overflow-hidden rounded-full">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="flex items-center gap-5 pr-5">
                  <p className="text-lg font-serif font-semibold">
                    {clientName} :
                  </p>
                  <h3 className="text-base">{name}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mt-10 px-10 lg:hidden"
      >
        {OurClientsData.map((items) => {
          const { id, name, image, description, clientName } = items;
          return (
            <SwiperSlide key={id} className="bg-[#ffcccc] w-full  py-5">
              <p className="px-10 text-xs xs:text-[13px] sm:text-sm md:text-base my-3">
                {description}
              </p>
              <div className="bg-white flex justify-between items-center ml-2 xs:ml-10 sm:ml-16 my-5 rounded-md">
                <figure className="h-12 w-12 border-[4px] border-[#feabab] overflow-hidden rounded-full -translate-x-2">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="flex items-center gap-2 xs:gap-5 pr-2 xs:pr-5">
                  <p className="text-[11px] xs:text-sm sm:text-lg font-serif font-semibold">
                    {clientName} :
                  </p>
                  <h3 className="text-xs xs:text-[13px] sm:text-base">
                    {name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurClients;
