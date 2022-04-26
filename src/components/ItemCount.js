import React from "react";

const ItemCount = ({ stock, cantidad, setCantidad, onAdd }) => {
  const handleCantidad = (action) => {
    if (action === "sumar" && cantidad < stock) {
      setCantidad(cantidad + 1);
    } else if (action === "restar" && cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  if (cantidad > stock) {
    setCantidad(0);
  }

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <div className="buttons has-addons">
        <button
          className={`button link ${
            stock === 1 || cantidad === 1 || cantidad === 0 ? "is-static" : ""
          }`}
          onClick={() => handleCantidad("restar")}
        >
          <span className="icon is-small">
            <i className="fa-solid fa-minus" />
          </span>
        </button>

        <button className="button is-static">{cantidad}</button>

        <button
          className={`button link ${cantidad === stock ? "is-static" : ""}`}
          onClick={() => handleCantidad("sumar")}
        >
          <span className="icon is-small">
            <i className="fa-solid fa-lg fa-plus" />
          </span>
        </button>
      </div>
      <button
        className={`button link is-fullwidth ${stock === 0 ? 'is-static' : ''}`} 
        onClick={onAdd}
      >
        <span className="icon-text">
          <span className="icon">
            <i className="fa-solid fa-cart-shopping" />
          </span>
          <span>Añadir al carrito</span>
        </span>
      </button>
    </div>
  );
};

export default ItemCount;
