import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import RentClothes from './pages/RentClothes';
import ListYourClothes from './pages/ListYourClothes';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Header />

        <main className="min-h-screen p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<RentClothes />} />
            <Route path="/list-your-clothes" element={<ListYourClothes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<div>Sign Up Page</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
