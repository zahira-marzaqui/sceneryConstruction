import { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.png" alt="Logo" />
        </a>

        <nav id="navmenu" className={`navmenu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink></li>

            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
                        <li><NavLink to="/Réalisation" className={({ isActive }) => isActive ? "active" : ""}>Réalisation</NavLink></li>

            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contactez-nous</NavLink></li>
          </ul>
          
        </nav>
        <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          />
      </div>
    </header>
  );
}

export default Menu;
