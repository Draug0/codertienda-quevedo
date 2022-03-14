import React from "react";

const NavBar = () => {
    return (
        <nav 
            className="navbar 
                       is-spaced 
                       is-dark
                       is-fixed-top"
        >
            <div className="container">
                
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <p id="brand">TIENDA CODER</p>
                    </a>
                </div>
                
                <div className="navbar-menu">
                    
                    <div className="navbar-start">
                        <a className="navbar-item" href="#">
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
                                <a className="button is-danger">Registrarse</a>
                                <a className="button is-white">Iniciar Sesión</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;