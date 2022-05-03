import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import logo from "./logo-nav.png";

const NavBar = () => {
  const [navBurger, setNavBurger] = useState(false);

  const handleNavBurger = () => {
    setNavBurger(!navBurger);
  };

  return (
    <nav className="navbar is-spaced is-black">
      <div className="container">
        <div className="navbar-brand">
          <Link to={"/"} className="navbar-item">
            <img src={logo} alt="red book logo" />
          </Link>
          <a
            role="button"
            className={`navbar-burger ${navBurger ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleNavBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${navBurger ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to={"/ofertas"} className="navbar-item is-expanded">
              <p>Ofertas</p>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Categorías</a>

              <div className="navbar-dropdown">
                <Link to={"/category/fantasia"} className="navbar-item">
                  Fantasía
                </Link>
                <Link to={"/category/ciencia-ficcion"} className="navbar-item">
                  Ciencia Ficción
                </Link>
                <Link to={"/category/novela"} className="navbar-item">
                  Novela
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <Link to='/order-search' className="navbar-item">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <span>
                  Buscá tu orden
                </span>
              </span>
            </Link>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
