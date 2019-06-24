import React, { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const inputRef = useRef();

  const sections = [{
    name: "Portfolio",
    url: "portfolio"
  },
  {
    name: "About",
    url: "about"
  },
  {
    name: "Contact",
    url: "contact"
  }];

  const navLinks = sections.map((section, index) => {
    return (
      <li className="nav-item mx-0 mx-lg-1" key={index}>
        <Link
          activeClass="active"
          to={section.url}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link py-3 px-0 px-lg-3 rounded"
          href="">
          {section.name}
        </Link>
      </li>
    )
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    let offsetTop = inputRef.current.getBoundingClientRect().top;
    console.log('Top ' + offsetTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav" ref={inputRef}>
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={scrollToTop}>Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;