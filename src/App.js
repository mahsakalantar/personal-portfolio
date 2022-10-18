import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio'

import Contact from './components/contact/Cantact';
import Footer from './components/footer/Footer';
import './App.css';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <div>
   <Header />
  <main className="main">
    <Home />
    <About />
    <Skills />
    {/* <Services /> */}
    <Qualification />
    
    <Portfolio />
    <Contact />
    
  </main>
<Footer />
<ScrollUp />
    </div>
  );
}

export default App;
