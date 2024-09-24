import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGallery from './Components/ProductGallery';
import Iphone from './Components/iPhonePage';
import Macbook from './Components/MacBookPage';
import IMac from './Components/IMacPage';
import IPad from './Components/iPadPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/ProductGallery' element={<ProductGallery />} />
          <Route path='/iPhonePage' element={<Iphone />} />
          <Route path='/MacBookPage' element={<Macbook />} />
          <Route path='/IMacPage' element={<IMac />} />
          <Route path='/iPadPage' element={<IPad />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
