import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-11/12 mx-auto bg-[#ffe3e3] grid grid-cols-1 lg:grid-cols-2 mt-16 gap-6 lg:gap-0"
      data-aos="zoom-in-down"
      data-aos-duration="1500"
    >
      <div className="px-5 py-5">
        <h2 className="text-center my-4 text-2xl font-serif">
          Make Appointment
        </h2>
        <form action="">
          <div className="block xs:flex items-center gap-3">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Gaurdian Name"
              className="w-full h-12 px-5 text-sm outline-none rounded-md mb-3 xs:mb-0"
            />
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Gaurdian Email"
              className="w-full h-12 px-5 text-sm outline-none rounded-md"
            />
          </div>
          <div className="block xs:flex items-center gap-3 py-3">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Child Name"
              className="w-full h-12 px-5 text-sm outline-none rounded-md mb-3 xs:mb-0"
            />
            <input
              type="text"
              name="age"
              autoComplete="off"
              placeholder="Child Age"
              className="w-full h-12 px-5 text-sm outline-none rounded-md"
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="message"
            className="w-full resize-none p-4 text-sm block"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-[#ff9f43] w-full my-3 py-3 rounded-sm text-white hover:bg-[#f69438] duration-300"
          />
        </form>
      </div>
      <figure>
        <img
          src="https://www.eurokidsindia.com/blog/wp-content/webp-express/webp-images/uploads/2023/09/general-knowledge-questions.jpg.webp"
          alt="contact image"
          className="w-full h-full object-cover"
        />
      </figure>
    </div>
  );
};

export default Contact;
