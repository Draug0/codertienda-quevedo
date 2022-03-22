import React from "react";

const CartWidget = () => {
    return (
        <a className="navbar-item">
            <span className="icon is-large">
                <i className="fa-solid fa-lg fa-cart-shopping" />
            </span>
            <span className="tag is-rounded">4</span>
        </a>
    )
}

export default CartWidget;