import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Masthead from '../components/Masthead/Masthead';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


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
      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-to-top d-lg-none position-fixed ">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>

  );
}

export default App;
