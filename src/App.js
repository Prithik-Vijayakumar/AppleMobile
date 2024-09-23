import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGallery from './Components/ProductGallery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/ProductGallery' element={<ProductGallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
