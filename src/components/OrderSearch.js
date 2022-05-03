import { doc, getDoc } from "firebase/firestore";
import { useFormik } from "formik";
import React, { useState } from "react";
import { db } from "../firebase/config";
import Order from "./Order";

const OrderSearch = () => {
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(false);

  document.title = 'Buscar tu orden - Red Book'

  const maskEmail = (email = "") => {
    const [name, domain] = email.split("@");
    const { length: len } = name;
    const maskedName = name[0] + "***" + name[len - 1];
    const maskedEmail = maskedName + "@" + domain;
    return maskedEmail;
  };

  function mask(names) {
    let maskedName = "";
    for (let i = 0; i < names.length; i++) {
      maskedName += names[i].charAt(0).padEnd(names[i].length, "*") + " ";
    }
    return maskedName;
  }

  const submit = (values) => {
    setLoading(true);
    const orderRef = doc(db, "orders", values.orderId);

    getDoc(orderRef)
      .then((doc) => {
        let data = doc.data();

        data.buyer.name = mask(data.buyer.name.split(" "));

        data.buyer.email = maskEmail(data.buyer.email);

        data.buyer.phone = data.buyer.phone
          .slice("-3")
          .padStart(data.buyer.phone.length, "*");

        setOrder(data);
        setLoading(false);
        formik.setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };

  const validate = (values) => {
    const errors = {};

    if (!values.orderId) {
      errors.orderId = "Ingresa tu número de orden!";
    } else if (values.orderId.length !== 20) {
      errors.orderId = "La orden debe tener 20 caractéres!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      orderId: "",
    },
    validate,
    onSubmit: submit,
  });

  return (
    <div className="container">
      <p className="title" style={{ textAlign: "left" }}>
        Busca tu orden!
      </p>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="text"
              name="orderId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.orderId}
              placeholder="Pega aquí tu número de orden."
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
          </p>
          {formik.touched.orderId && formik.errors.orderId ? (
            <p className="help link-color">{formik.errors.orderId}</p>
          ) : null}
        </div>
        <button className="button link" type="submit">
          Buscar!
        </button>
      </form>
      <div className="content" style={{ marginTop: "20px" }}>
        {loading ? (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : order ? (
          <Order order={order} orderId={formik.values.orderId} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrderSearch;
