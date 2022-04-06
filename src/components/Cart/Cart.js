import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import CartTableItem from '../CartTableItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, clearCart, cartTotal } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className='container'>
        <p className='title'> Tu carrito está vacío :(</p>
        <div className='buttons is-justify-content-center'>
          <Link to='/' className='button is-black'>
            <span className='icon-text'>
              <span className='icon'>
                <i className='fa-solid fa-house'/>
              </span>
              <span>
                Inicio
              </span>
            </span>
          </Link>
          <Link to='/ofertas' className='button is-link'>
            <span className='icon-text'>
              <span className='icon'>
                <i className='fa-solid fa-tag'/>
              </span>
              <span>
                Ofertas
              </span>
            </span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='container' style={{textAlign: 'left'}}>
      <p className='title'> Tu carrito</p>
      <button className='button is-link' onClick={clearCart}> 
        Vacíar carrito
      </button>
      <hr />
      <div className='table-container'>
        <table className='table is-hoverable is-fullwidth is-narrow'>
          <thead>
            <tr>
              <th className='is-hidden-mobile'>ID</th>
              <th>Título</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <CartTableItem key={item.id} item={item} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th className='is-hidden-mobile'/>
              <th />
              <th>$ {cartTotal()}</th>
              <th />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Cart