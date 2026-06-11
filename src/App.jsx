// import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Success from "./components/Success";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div class="bg-amber-100 font-mono font-medium  h-full">
          <h1 class="z-10 flex justify-center text-2xl font-bold uppercase [text-decoration:underline_overline] py-4 sticky top-0  bg-amber-100 font-[abril_fatface]">
            Lola's Sourdough Bakery
          </h1>
          <nav class=" z-10 mb-2 flex gap-2 justify-around border-b-4 border-t-4 border-double font-semibold sticky top-16 w-screen bg-amber-100 shadow-md shadow-gray-400 font-[abril_fatface]">
            <Link to="/" class="hover:underline ">
              Home
            </Link>
            <Link to="/about" class="hover:underline ">
              About
            </Link>
            <Link to="/contact" class="hover:underline">
              Contact
            </Link>
            <Link to="/menu" class="hover:underline">
              Menu
            </Link>
          </nav>
          <Routes>
            <Route path="/success" element={<Success />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
