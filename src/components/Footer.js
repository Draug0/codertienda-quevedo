import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/complete-logo.png"

const Footer = () => {
  return (
    <footer className="footer" style={{ paddingBottom: "1.5rem" }}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Link to='/'>
              <img src={logo} alt='Red Book logo' />
            </Link>
          </div>
          <div className="column">
            <div className="content">
              <dl>
                <dt><strong>Explorar</strong></dt>
                <dd>
                  <Link className="link-color" to="/">
                    <strong>Inicio</strong>
                  </Link>
                </dd>
                <dd>
                  <Link className="link-color" to="/ofertas">
                    <strong>Ofertas</strong>
                  </Link>
                </dd>
                <dd>
                  <Link className="link-color" to="/order-search">
                    <strong>Buscar tu orden</strong>
                  </Link>
                </dd>
                <dd>
                  <Link className="link-color" to="/cart">
                    <strong>Carrito</strong>
                  </Link>
                </dd>
              </dl>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <dl>
                <dt>
                  <strong>Categorías</strong>
                </dt>
                <dd>
                  <Link className="link-color" to="/category/fantasia">
                    <strong>Fantasía</strong>
                  </Link>
                </dd>
                <dd>
                  <Link className="link-color" to="/category/ciencia-ficcion">
                    <strong>Ciencia Ficción</strong>
                  </Link>
                </dd>
                <dd>
                  <Link className="link-color" to="/category/novela">
                    <strong>Novela</strong>
                  </Link>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="content is-small has-text-centered">
          <p>
            <span className="icon-text">
              <span className="icon">
                <i className="fa-regular fa-copyright"/>
              </span>
              <span>
                2020 Red Book. Lucio Quevedo
              </span>
              <a href='https://github.com/Draug0/codertienda-quevedo' className="icon">
                <i className="fa-brands fa-github" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
