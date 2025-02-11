import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home/Home';
import What_we from './pages/What-we';
import About from './pages/About';
import Insight from './pages/Insight';
import Performance from './pages/perfomance';
import StickyScroll from './pages/check';

import "./styles/main.css";
import { StyledEngineProvider } from '@mui/material/styles';
import VerticalImageSlider from './pages/animation3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-offer" element={<What_we />} />
        <Route path="/About" element={<About />} />
        <Route path="/Insight" element={<Insight />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/check" element={<StickyScroll />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
