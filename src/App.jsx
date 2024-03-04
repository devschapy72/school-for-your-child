import React from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "./router-path/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Index />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
