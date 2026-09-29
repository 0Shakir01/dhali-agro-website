import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import BusinessDetails from './pages/BusinessDetails';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Career from './pages/Career';
import Dealership from './pages/Dealership';
import Contact from './pages/Contact';
import FarmerSupport from './pages/FarmerSupport';
import Sustainability from './pages/Sustainability';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="business/:slug" element={<BusinessDetails />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="projects" element={<Projects />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsDetails />} />
        <Route path="career" element={<Career />} />
        <Route path="dealership" element={<Dealership />} />
        <Route path="dealer" element={<Navigate to="/dealership" replace />} />
        <Route path="farmer-support" element={<FarmerSupport />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
