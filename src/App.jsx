// import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
        <div class="bg-amber-100 font-mono  h-full">
          <h1 class="flex justify-center text-2xl font-bold uppercase [text-decoration:underline_overline] py-4 sticky top-0  bg-amber-100">
            Lola's Bakery
          </h1>
          <nav class=" mb-2 flex gap-2 justify-around border-b-4 border-t-4 border-double font-semibold sticky top-16 w-screen bg-amber-100 shadow-md shadow-gray-400">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/menu">Menu</Link>
          </nav>
          <Routes>
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
