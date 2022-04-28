import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { Link, useNavigate } from "react-router-dom";
import "./itemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const { addItem, isInCart } = useContext(CartContext);

  let price = item.sale ? item.price - item.price / 10 : item.price

  const onAdd = () => {
    let itemAdded = {
      id: item.id,
      title: item.title,
      price: price,
      stock: item.stock,
      quantity: cantidad,
    };

    addItem(itemAdded);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="item-detail">
        <div id='image-content'>
          <div className="imageDiv">
            <p className="">
              <img src={item.pictureUrl} alt={item.title} id="img" />
            </p>
          </div>
          <div className="content" id="content-item-detail">
            <h2>{item.title}</h2>
            <p className="has-text-grey">By (autor) {item.author}</p>
            <span className="description">
              <hr />
              <h4>Descripción</h4>
              <p>{item.description}</p>
            </span>
          </div>
        </div>
        <div className="price-card">
          <div className="card" id="card-detail">
            <div className="card-content" id='card-content'>
              <div className="content" style={{ textAlign: "left" }}>
                <h1 className="link-color">
                  ${price}{" "}
                  <span className="has-text-grey-light is-size-7">
                    p/unidad
                  </span>
                </h1>
                <hr />
                <h3>¡{item.stock} en stock!</h3>
                <p>Total: ${price * cantidad}</p>
              </div>
              <div id='handler'>
                {!isInCart(item.id) ? (
                  <ItemCount
                    stock={item.stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={onAdd}
                  />
                ) : (
                  <>
                    <div className="content">
                      <h5>¡En el carrito!</h5>
                    </div>
                    <Link to={"/cart"} className="button link is-fullwidth">
                      <span className="icon-text">
                        <span className="icon">
                          <i className="fa-solid fa-circle-check" />
                        </span>
                        <span>Terminar mi compra</span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content" id="responsive-description">
        <hr />
        <h4>Descripción</h4>
        <p>{item.description}</p>
      </div>
      <div style={{ textAlign: "left", marginTop: '20px'}}>
        <button className="button is-black" onClick={handleBack}>
          Atrás
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
