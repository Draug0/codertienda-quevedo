import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [orderId, setOrderId] = useState()
  const { cart, cartTotal, clearCart } = useContext(CartContext)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: form.name,
        phone: form.tel,
        email: form.email
      },
      items: [
        ...cart
      ],
      date: Timestamp.fromDate(new Date()),
      total: cartTotal()
    }

    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, order)
      .then((doc) => {
        setOrderId(doc.id)
        clearCart()
      })
  };

  if(orderId) {
    return (
      <Navigate to={`/order/${orderId}`} />
    )
  }

  if (cart.length === 0) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <div className="container">
      <p className="title">Finaliza tu compra</p>
      <hr />
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="text"
              name="name"
              placeholder="Nombre y apellido*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-user" />
            </span>
          </p>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-rounded"
              type="email"
              name="email"
              placeholder="Email*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-rounded"
              type="tel"
              name="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3,4}||[0-9]{3} [0-9]{3,4} [0-9]{4}||[0-9]{10}"
              placeholder="Número de teléfono*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-phone" />
            </span>
          </div>
        </div>
        <button className="button is-link" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Checkout;
