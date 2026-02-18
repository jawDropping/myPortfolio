import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import About from "./pages/about.jsx";
import Hobbies from "./pages/hobbies.jsx";
import Education from "./pages/education.jsx";
import { BrowserRouter, Route, Router, Routes, Navigate } from 'react-router-dom';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;