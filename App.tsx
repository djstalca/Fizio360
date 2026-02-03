import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Booking />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;