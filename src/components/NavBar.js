import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar is-spaced is-black">
            <div className="container">
                
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src='logo-nav.png' />
                    </a>
                </div>
                
                <div className="navbar-menu">
                    
                    <div className="navbar-start">
                        <a className="navbar-item is-expanded">
                            <p>Ofertas</p>
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Categorías
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    Fantasia
                                </a>
                                <a className="navbar-item">
                                    Ciencia Ficción
                                </a>
                                <a className="navbar-item">
                                    Historia
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-info">Registrarse</a>
                                <a className="button is-white">Iniciar Sesión</a>
                            </div>
                        </div>
                        <CartWidget />
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;