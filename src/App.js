import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGallery from './Components/ProductGallery';
import Iphone from './Components/iPhonePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/ProductGallery' element={<ProductGallery />} />
          <Route path='/iPhonePage' element={<Iphone />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
