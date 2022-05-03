import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { db } from '../firebase/config'
import Order from './Order'
import Steps from './Steps'

const OrderReady = ({ orderId }) => {
  const [ order, setOrder] = useState('')
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const ordersRef = doc(db, 'orders', orderId)
    getDoc(ordersRef)
      .then((doc => {
          setOrder(doc.data())
          setLoading(false)
      }))
  }, [orderId])

  const copy = () => {
    navigator.clipboard.writeText(orderId)
  }

  if (order === undefined) {
    return (
      <Navigate to='/' />
    )
  }

  if (loading) {
    return (
      <div className='container'>
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='content'>
        <p className='title'>
          Todo listo :)
        </p>
        <hr />
        <p className='subtitle'>
          Nº de orden: <strong>{orderId}</strong>
        </p>
        <button className='button link' onClick={copy}>
          <span className='icon-text'>
            <span className='icon'>
              <i className='fa-solid fa-copy'/>
            </span>
            <span>Copiar nº de orden</span>
          </span>
        </button>
        <p className='link-color'>
          ¡Recuerda anortar tu nº de orden!
        </p>
        
        <Order order={order} orderId={orderId}/>
      </div>
      <Steps order={true}/>
    </div>
  )
}

export default OrderReady