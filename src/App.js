import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';

function App(){
  return (
    <Router>   {/* 🔥 Router wrap केले */}

      <Navbar title="Textutils" home="Home" about="About Us" />

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Textform />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;