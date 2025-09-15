import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Features from './pages/Features.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
      
        <main className="min-h-screen">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/features' element={<Features />} />
            <Route path='/contact' element={<Contact />} />
          
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

