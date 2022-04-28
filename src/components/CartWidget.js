import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cartQuantityTotal, cartTotal } = useContext(CartContext)
    
    return (
        <Link to={'/cart'} className="navbar-item">
            <span className="icon is-large">
                <i className="fa-solid fa-lg fa-cart-shopping" />
            </span>
            {cartQuantityTotal() > 0 && (
                <span className="tag is-rounded">{cartQuantityTotal()}</span>
            )}
        </Link>
    )
}

export default CartWidget;