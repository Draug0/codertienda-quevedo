import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)
    
    return (
        <Link to={'/cart'} className="navbar-item">
            <span className="icon is-large">
                <i className="fa-solid fa-lg fa-cart-shopping" />
            </span>
            <span className="tag is-rounded">{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget;