import React from "react";

const NavBar = () => {
    return (
        <nav 
            className="navbar 
                       is-spaced 
                       is-danger 
                       is-fixed-top"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <p>TIENDA CODER</p>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="#">
                            <p>Ofertas</p>
                        </a>
                        <a className="navbar-item" href="#">
                            <p>Categorías</p>
                        </a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item" href="#">
                            <p>Busqueda</p>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;