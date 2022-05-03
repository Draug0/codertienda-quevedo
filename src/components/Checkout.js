import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  Timestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import Steps from "./Steps";
import OrderReady from "./OrderReady";

const Checkout = () => {
  const [orderId, setOrderId] = useState();
  const [stockModal, setStockModal] = useState(false);
  const [sinStock, setSinStock] = useState([]);
  const [loading, setLoading] = useState(false)
  const { cart, cartTotal, clearCart, updatePrice } = useContext(CartContext);

  document.title = 'Checkout - Red Book'

  const submit = async (values) => {
    setLoading(true)

    const orderCollection = collection(db, "orders");
    const prodRef = collection(db, "productos");
    const q = query(
      prodRef,
      where(
        documentId(),
        "in",
        cart.map((i) => i.id)
      )
    );

    const productos = await getDocs(q);
    const batch = writeBatch(db);
    var noStock = [];

    productos.docs.forEach((item) => {
      const producto = item.data();
      const prodInCart = cart.find((i) => i.id === item.id);

      let price = producto.sale
        ? producto.price - producto.price / 10
        : producto.price;
      updatePrice(item.id, price);

      if (prodInCart.quantity <= producto.stock && prodInCart.quantity > 0) {
        let newStock = producto.stock - prodInCart.quantity;
        batch.update(item.ref, { stock: newStock });
      } else {
        noStock.push(producto.title);
      }
    });

    const order = {
      buyer: {
        name: values.name,
        phone: values.tel,
        email: values.email,
      },
      items: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: cartTotal(),
    };

    if (noStock.length === 0) {
      addDoc(orderCollection, order).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        clearCart();
        setLoading(false)
      });
    } else {
      setStockModal(true);
      setSinStock(noStock);
      for (let i = 0; i < noStock.length; i++) {
        noStock.pop();
      }
      setLoading(false)
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const telRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (!values.name) {
      errors.name = "Obligatorio*";
    } else if (values.name.length < 3) {
      errors.name = "El nombre debe tener 4 letras o más.";
    }

    if (!values.email) {
      errors.email = "Obligatorio*";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Dirección de email.";
    }

    if (!values.confirmEmail) {
      errors.confirmEmail = "Obligatorio*";
    } else if (values.email !== values.confirmEmail) {
      errors.confirmEmail = "Los emails deben coincidir.";
    }

    if (!values.tel) {
      errors.tel = "Obligatorio*";
    } else if (!telRegex.test(values.tel)) {
      errors.tel = 'Utiliza un formato adecuado, ej: "1234567899", "123 456 7899", "123-456-7899", "(123) 456 7899"'
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      confirmEmail: "",
      tel: "",
    },
    validate,
    onSubmit: submit,
  });

  const handleModal = () => {
    setStockModal(false);
    setSinStock([]);
  };

  if (orderId) {
    return <OrderReady orderId={orderId} />;
  }

  if (loading) {
    return (
      <div className="container">
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
    )
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <p className="title">Finaliza tu compra</p>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className={`input is-rounded ${
                formik.touched.name && formik.errors.name ? "is-danger" : ""
              }`}
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nombre y apellido*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-user" />
            </span>
          </p>
          {formik.touched.name && formik.errors.name ? (
            <p className="help is-danger">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className={`input is-rounded ${
                formik.touched.email && formik.errors.email ? "is-danger" : ""
              }`}
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-envelope" />
            </span>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="help is-danger">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className={`input is-rounded ${
                formik.touched.confirmEmail && formik.errors.confirmEmail
                  ? "is-danger"
                  : ""
              }`}
              type="email"
              name="confirmEmail"
              value={formik.values.confirmEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirmar email*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-envelope" />
            </span>
          </div>
          {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
            <p className="help is-danger">{formik.errors.confirmEmail}</p>
          ) : null}
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className={`input is-rounded ${
                formik.touched.tel && formik.errors.tel ? "is-danger" : ""
              }`}
              type="tel"
              name="tel"
              value={formik.values.tel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Número de teléfono*"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-phone" />
            </span>
          </div>
          {formik.touched.tel && formik.errors.tel ? (
            <p className="help is-danger">{formik.errors.tel}</p>
          ) : null}
        </div>
        <button 
          className={`button link ${
            formik.isValid && formik.dirty ? '' : 'is-static'
          }`} 
          type="submit"
        >
          Realizar compra
        </button>
      </form>
      {stockModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={handleModal} />
          <div className="modal-content">
            <div className="box">
              <div className="content" style={{ textAlign: "left" }}>
                <h3>No hay suficiente stock de los siguientes item(s):</h3>
                <ul>
                  {sinStock.map((i, n) => (
                    <li key={n}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={handleModal}
          />
        </div>
      )}
      <div style={{ textAlign: "left" }}>
        <Steps info={true} />
      </div>
    </div>
  );
};

export default Checkout;
