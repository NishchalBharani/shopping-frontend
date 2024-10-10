// src/routes/PublicRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import About from '../pages/SubPages/About';
import Careers from '../pages/SubPages/Careers';
import Contact from '../pages/SubPages/Contact';
import FAQ from '../pages/SubPages/FAQ';
import ShippingInfo from '../pages/SubPages/ShippingInfo';
import ReturnsExchanges from '../pages/SubPages/ReturnsExchanges';
import PrivacyPolicy from '../pages/SubPages/PrivacyPolicy';
import TermsOfService from '../pages/SubPages/TermsOfService';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/shipping" element={<ShippingInfo />} />
      <Route path="/returns" element={<ReturnsExchanges />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/search' element={<SearchPage />}/>
    </Routes>
  );
};

export default PublicRoutes;
