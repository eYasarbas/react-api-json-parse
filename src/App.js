import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AnimationPage from "./AnimationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimationPage />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
