import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/navbar';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import WhatWeOffer from './pages/WhatWeOffer';
// import Performance from './pages/Performance';
// import Insights from './pages/Insights';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<AboutUs />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/insights" element={<Insights />} /> */}
      </Routes>
    </>
  );
};

export default App;
