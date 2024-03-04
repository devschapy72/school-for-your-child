import React from "react";
import HeroImage from "../hero-image/HeroImage";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        {HeroImage.map((items) => {
          const { id, image, titel, paragrap, button1, button2 } = items;
          return (
            <SwiperSlide key={id}>
              <div className="relative">
                <figure>
                  <img
                    src={image}
                    alt={titel}
                    className="w-full h-screen object-cover"
                  />
                </figure>
                <div className="absolute top-0 left-0  w-full h-full flex flex-col justify-center items-center md:items-start md:pl-20 bg-[#0000006a]">
                  <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-11/12 xs:w-8/12 lg:w-5/12 font-serif font-extrabold text-white mb-3 md:leading-10 lg:leading-[4rem]">
                    {titel}
                  </p>
                  <p className="text-[12px] xs:text-sm sm:text-base lg:text-xl w-11/12 xs:w-8/12 lg:w-6/12 text-white mb-6 xs:mb-8 sm:mb-12">
                    {paragrap}
                  </p>
                  <div className="flex gap-3 xs:gap-5">
                    <button className="bg-orange-600 px-6 xs:px-10 py-3 rounded-full text-white font-serif font-semibold text-xs xs:text-base capitalize border-2 border-orange-600 hover:bg-transparent duration-300">
                      {button1}
                    </button>
                    <button className="bg-gray-600 px-6 xs:px-10 py-3 rounded-full text-white font-serif font-semibold text-xs xs:text-base capitalize border-2 border-gray-600 hover:bg-transparent duration-300">
                      {button2}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
