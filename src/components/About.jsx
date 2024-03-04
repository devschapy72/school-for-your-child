import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="w-11/12 xs:w-10/12 sm:w-8/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 pt-10">
        {/* DIV-1 */}
        <div>
          <h3
            className="font-serif text-2xl xs:text-3xl sm:text-4xl font-semibold"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Learn More About Our Work And Our Cultural Activities
          </h3>
          <p
            className="text-xs xs:text-[13px] sm:text-sm my-2 xs:my-3"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p
            className="text-xs xs:text-[13px] sm:text-sm mt-6 mb-5 xs-mb-7 sm:mb-10"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
            est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
            clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no
            sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy
            magna.
          </p>
          <div
            className="flex justify-between items-center gap-2 xs:gap-3 sm:gap-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <button className="bg-[#ff9f43] hover:bg-transparent duration-300 hover:text-[#ff9f43] px-5 xs:px-10 sm:px-14 py-2 sm:py-3 rounded-full text-xs xs:text-[13px] sm:text-sm text-white font-serif border-[4px] border-[#db9553]">
              Read More
            </button>
            <div className="flex justify-between items-center gap-3">
              <figure className="w-10 xs:w-14 h-10 xs:h-14 border-[3px] rounded-full overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/pretty-young-man-student-businessman-jacket-holds-his-arms-crossed-isolated-light-grey-wall_231208-6133.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709337600&semt=ais"
                  alt="ceo img"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="text-xs xs:text-sm font-serif">
                <p className="text-[#ff9f43]">Jhon Doe</p>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
        {/* DIV-2 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <div>
            <figure className="w-[15rem] xs:w-[20rem] sm:w-[25rem] h-[15rem] xs:h-[20rem] sm:h-[25rem] border-[7px] xs:border-[10px] sm:border-[15px] border-[#ff9f43] rounded-full overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/462268645/photo/pretty-girl-with-many-books-at-school.jpg?s=612x612&w=0&k=20&c=ktMm0aY-gHB-0sg3fTAAUWk5kbbDCfhR8EItXKf5kns="
                alt="child imag"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="flex items-center gap-9 -translate-y-28">
            <figure className="w-[7rem] xs:w-[8rem] sm:w-[12rem] h-[7rem] xs:h-[8rem] sm:h-[12rem] rounded-full overflow-hidden border-[5px] xs:border-[7px] sm:border-[12px] border-[#ff9f43]">
              <img
                src="https://i.pngimg.me/thumb/f/350/b27ecdfc186544c190b8.jpg"
                alt="img 2"
                className="w-full h-full object-cover"
              />
            </figure>
            <figure className="w-[7rem] xs:w-[8rem] sm:w-[12rem] h-[7rem] xs:h-[8rem] sm:h-[12rem] rounded-full overflow-hidden border-[5px] xs:border-[7px] sm:border-[12px] border-[#ff9f43]">
              <img
                src="https://media.istockphoto.com/id/176443661/photo/reading.jpg?s=612x612&w=0&k=20&c=VIGa9V9fJA7oxjH-KYGM1FspGXiqkdQ8DNF7tk4fXG8="
                alt="imag3"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* Become A Teacher */}
      <div
        className="w-11/12 sm:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 md:gap-10 items-center bg-[#f5cca5]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <figure className="">
          <img
            src="https://teachingstrategies.com/wp-content/uploads/2021/03/Blog_5_tips_Individualizing_Learning@2x.jpg"
            alt="teacher class"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <div className="px-5">
          <h2 className="text-2xl xs:text-3xl font-serif mb-3">
            Become A Teacher
          </h2>
          <p className="text-sm mb-5 sm:mb-7 md:mb-10">
            Enroll in our School Become A Teacher program to gain essential
            skills, practical experience, and certification for a rewarding
            career in education. Join us to make a difference in students' lives
          </p>
          <div className="bg-[#ff9f43] font-serif font-semibold text-sm flex items-center justify-center gap-2 text-white  py-4 px-2 rounded-full hover:bg-[#da883c] duration-300 mb-3">
            <button>Get Started Now</button>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
