import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutPage from './pages/About.js';
import PricingPage from './pages/Pricing.js';
import TestimonialsPage from './pages/Testimonials.js';
import AppsPage from './pages/Apps.js';
import HttpCodesPage from './pages/Http-codes.js';
import SigninPage from './pages/Signin.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/about" element={<AboutPage />} />
         
      <Route path="/pricing" element={<PricingPage />} />
         
      <Route path="/testimonials" element={<TestimonialsPage />} />
         
      <Route path="/apps" element={<AppsPage />} />
         
      <Route path="/httpcodes" element={<HttpCodesPage />} />
         
      <Route path="/signin" element={<SigninPage />} />
    </Routes>
  );
}

export default App;
