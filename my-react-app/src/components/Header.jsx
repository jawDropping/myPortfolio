import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import { FaRegSmileWink } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/about" className="logo">
            <FaRegSmileWink className="logo-icon"/>
            <span className="logo-text">Carlos Joshua</span>
          </Link>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span>About</span>
          </NavLink>
          <NavLink to="/hobbies" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span>Hobbies</span>
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span>Education</span>
          </NavLink>

            <a href="#contact" className="nav-link nav-cta">
              <span>Contact</span>
            </a>
          </nav>

          {/* Hamburger button */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    );
}

export default Header;