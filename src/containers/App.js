import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Masthead from '../components/Masthead/Masthead';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';


function App() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />
      {/* Masthead */}
      <Masthead />
      {/* Portfolio Grid Items */}
      <Portfolio />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
