import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './element/Header'
import Footer from './element/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Map from './pages/Map'

const App = () => {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/map" element={<Map />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
