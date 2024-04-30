import React, { useState } from 'react';

import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Profil from "./pages/Profil.jsx";
import Contact from "./pages/Contact.jsx";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

  
  const handleSmallNavOpen = (value) => {
    setIsSmallNavOpen(value);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home isSmallNavOpen={isSmallNavOpen} setIsSmallNavOpen={handleSmallNavOpen} />} />
          <Route path="/product" element={<Product isSmallNavOpen={isSmallNavOpen} setIsSmallNavOpen={handleSmallNavOpen} />} />
          {/* <Route path="/portfolio" element={<Portfolio isSmallNavOpen={isSmallNavOpen} setIsSmallNavOpen={handleSmallNavOpen} />} /> */}
          <Route path="/testimonial" element={<Testimonial isSmallNavOpen={isSmallNavOpen} setIsSmallNavOpen={handleSmallNavOpen} />} />
          <Route path="/profil" element={<Profil isSmallNavOpen={isSmallNavOpen} setIsSmallNavOpen={handleSmallNavOpen} />} />
          <Route path="/contact" element={<Contact isSmallNavOpen={isSmallNavOpen} setIsSmallNavOpen={handleSmallNavOpen} />} />
        </Routes>
      </Router>
  )
}

export default App
