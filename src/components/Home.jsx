import React from "react";
import Hero from "./Hero";
import SchoolFacilities from "../school-facilities-data/SchoolFacilities";
import About from "./About";
import Classes from "./Classes";
import Contact from "./Contact";
import PopularTeachers from "../popular _teachers/PopularTeachers";

const Home = () => {
  return (
    <div>
      <Hero />
      <SchoolFacilities />
      <About />
      <Classes />
      <Contact />
      <PopularTeachers />
    </div>
  );
};

export default Home;
