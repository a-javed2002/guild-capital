import React, { useEffect, useState } from "react";
import "../styles/main.css"; 
import logosvg from "../assets/images/logo-svg.svg";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <NavLink  className="navbar-brand" to="/">
          <img src={logosvg} alt="Logo" />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item"><NavLink  className="nav-link" to="/About" activeClassName="active">About Us</NavLink></li>
            <li className="nav-item"><NavLink  className="nav-link" to="/what-we-offer" activeClassName="active">What We Offer</NavLink></li>
            <li className="nav-item"><NavLink  className="nav-link" to="/performance" activeClassName="active">Performance</NavLink></li>
            <li className="nav-item"><NavLink  className="nav-link" to="/Insight" activeClassName="active">Insights</NavLink></li>
          </ul>

          {/* Right Side - Login & Get Started (Now Inside Navbar) */}
          <div className="d-flex align-items-center mt-3 mt-lg-0  btn-section">
            <NavLink  className="nav-link me-3" to="#">Login</NavLink>
            <button  className=" rounded-pill px-4 fill-button" >Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
