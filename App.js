import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Clients from './components/Clients';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Clients />
      <Services />
      <Footer />
    </div>
  );
}

export default App;