import React from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "./router-path/Index";
import DashBord from "./layout/DashBord";

const App = () => {
  return (
    <BrowserRouter>
      <DashBord>
        <Index />
      </DashBord>
    </BrowserRouter>
  );
};

export default App;
