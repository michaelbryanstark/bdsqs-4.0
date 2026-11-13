import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './hocs/Layout';
import Footer from './hocs/Footer';

import Welcome from './Components/Welcome';
import Company from './Components/Company';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';

// React Router v6 keeps the old scroll position between pages; reset it on navigation.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <Router>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/company" element={<Company />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        {/* Services now lives on the home page; keep old /services links working */}
        <Route path="/services" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
    <Footer />
  </Router>
);

export default App;
