import React from "react";
import Hero from "./Hero";
import SchoolFacilities from "../school-facilities-data/SchoolFacilities";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <SchoolFacilities />
      <About />
    </div>
  );
};

export default Home;
