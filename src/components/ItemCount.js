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
          className={`button is-danger ${
            stock === 1 || cantidad === 1 ? "is-static" : ""
          }`}
          onClick={() => handleCantidad("restar")}
        >
          <span className="icon is-small">
            <i className="fa-solid fa-minus" />
          </span>
        </button>

        <button className="button is-static">{cantidad}</button>

        <button
          className={`button is-danger ${
            cantidad === stock ? "is-static" : ""
          }`}
          onClick={() => handleCantidad("sumar")}
        >
          <span className="icon is-small">
            <i className="fa-solid fa-lg fa-plus" />
          </span>
        </button>
      </div>

      <div className="content">
        <h6 className="has-text-white">¡{stock} disponible!</h6>
      </div>

      <button className="button is-danger" onClick={onAdd}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
