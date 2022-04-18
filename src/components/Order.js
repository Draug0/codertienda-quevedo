import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { db } from '../firebase/config'

const Order = () => {
  const [ order, setOrder] = useState('')
  const [ loading, setLoading ] = useState(true)
  const { orderId } = useParams()

  useEffect(() => {
    const ordersRef = doc(db, 'orders', orderId)
    getDoc(ordersRef)
      .then((doc => {
          setOrder(doc.data())
          setLoading(false)
      }))
  }, [orderId])

  if (order == undefined) {
    return (
      <Navigate to='/' />
    )
  }

  if (loading) {
    return (
      <div className='container'>
        <button className='button is-loading' />
      </div>
    )
  }

  return (
    <div className='container'>
      <p className='title'>
        Todo listo :)
      </p>
      <hr />
      <p className='subtitle'>
        Nº de orden: <strong>{orderId}</strong>
      </p>
      <p>Datos de la compra</p>
      <p>
        Nombre: {order.buyer.name} 
      </p>
      <p>
        Email: {order.buyer.email}
      </p>
      <table className='table is-hoverable is-fullwidth' style={{textAlign: 'left'}}>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th />
            <th>$ {order.total}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Order