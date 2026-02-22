import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import ScrollToTop from './pages/ScrollToTop';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

import HomePage from './pages/home/HomePage';
import SignupPage from './pages/singup/SignupPage';
import LoginPage from './pages/singup/LoginPage';
import AboutPage from './pages/about/AboutPage';
import PricingPage from './pages/pricing/PricingPage';
import ProductPage from './pages/products/ProductPage';
import SupportPage from './pages/support/SupportPage';
import Pagenotfound from './pages/Pagenotfound';
import 'react-toastify/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/pricings' element={<PricingPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<Pagenotfound />} />

    </Routes>
    <Footer />
  </BrowserRouter>

);


