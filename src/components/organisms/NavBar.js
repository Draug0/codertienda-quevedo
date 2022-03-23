import React from "react";
import CartWidget from "../atoms/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar is-spaced is-black">
            <div className="container">
                
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <p id="brand">TIENDA CODER</p>
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
                                    Libros
                                </a>
                                <a className="navbar-item">
                                    Tecnología
                                </a>
                                <a className="navbar-item">
                                    Servicios
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