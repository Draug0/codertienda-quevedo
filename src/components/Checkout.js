import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [ orderId, setOrderId ] = useState()
  const [ stockModal, setStockModal ] = useState(false)
  const [ sinStock, setSinStock ] = useState([])
  const { cart, cartTotal, clearCart, updatePrice } = useContext(CartContext)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderCollection = collection(db, 'orders')
    const prodRef = collection(db, 'productos')
    const q = query(prodRef, where(documentId(), 'in', cart.map(i => i.id)))

    const productos = await getDocs(q)
    const batch = writeBatch(db)
    var noStock = []

    productos.docs.forEach(item => {
      const producto = item.data()
      const prodInCart = cart.find(i => i.id === item.id)

      let price = producto.sale ? producto.price - producto.price / 10 : producto.price
      updatePrice(item.id, price)

      if (prodInCart.quantity <= producto.stock && prodInCart.quantity > 0) {
        let newStock = producto.stock - prodInCart.quantity
        batch.update(item.ref, { stock: newStock })
      } else {
        noStock.push(producto.title)
      }
    })

    const order =  {
      buyer: {
        name: form.name,
        phone: form.tel,
        email: form.email
      },
      items: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: cartTotal()
    }

    if (noStock.length === 0) {
      addDoc(orderCollection, order)
        .then((doc) => {
          batch.commit()
          setOrderId(doc.id)
          clearCart()
        })
    } else {
      setStockModal(true)
      setSinStock(noStock)
      for (let i = 0; i < noStock.length; i++) {
        noStock.pop()
      }
    }    
  };

  const handleModal = () => {
    setStockModal(false)
    setSinStock([])
  }

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
        <button className="button link" type="submit">
          Checkout
        </button>
      </form>
      {
        stockModal && (
          <div className="modal is-active">
            <div className="modal-background" onClick={handleModal}/>
            <div className="modal-content">
              <div className="box">
                <div className="content" style={{textAlign: 'left'}}>
                  <h3>No hay suficiente stock de los siguientes item(s):</h3>
                  <ul>
                    {sinStock.map((i, n) => <li key={n}>{i}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={handleModal} />
          </div>
        )
      }
    </div>
  );
};

export default Checkout;
