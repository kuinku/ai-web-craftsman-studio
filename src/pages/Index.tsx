
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Templates from '../components/Templates';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import { AuthProvider } from '../contexts/AuthContext';

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <Hero />
        <Features />
        <Templates />
        <Pricing />
        <Footer />
        <AuthModal />
      </div>
    </AuthProvider>
  );
};

export default Index;
