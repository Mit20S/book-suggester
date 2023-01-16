import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import App from './App';
import NotFound from './pages/NotFound';
import Single from './components/Single'
import AboutPage from './pages/AboutPage';
import Contact from './pages/ContactPage';
import LoginPage from './pages/LoginPage'

import Header from './components/Header'; 
import Footer from './components/Footer'
import Registration from './pages/RegistrationPage';
import Books from './pages/Books';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/books" element={<Books />} />
        <Route path='*' element={<NotFound />} />      
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
);
