import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount'
import { Link, useNavigate } from 'react-router-dom'
import './itemDetail.css'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {
  const [ amount, setAmount ] = useState(1)

  const { addItem, isInCart } = useContext(CartContext)
  
  const onAdd = () => {
    let itemAdded = item
    itemAdded.quantity = amount

    addItem(itemAdded)
  }

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  
  return (
    <article className='media' id='media'>
      
      <figure className='media-left' id='media-l' style={{flexGrow: 1}}>
        <p className='image'>
          <img id='image' src={item.pictureUrl} alt={item.title}/>
        </p>
      </figure>
      
      <div className='media-content' style={{flexGrow: 3}}>
        <div className='content' id='info'>
          <h2>{item.title}</h2>
          <p>By (autor) {item.author}</p>
          <hr />
          <h4>Descripción</h4>
          <p>
            {item.description}
          </p>
        </div>
      </div>

      <div className='media-right' id='media-r' style={{flexGrow: 1}}>
        <div className='box is-shadowless' id='price-card'>
          <div className='content'>
            <h3 className='has-text-white'>
              Precio: $ {item.price * amount}
            </h3>
            <hr />
            { 
              !isInCart(item.id)
              ?
                <ItemCount 
                  stock={item.stock}
                  amount={amount}
                  setAmount={setAmount}
                  onAdd={onAdd}
                />
              :
                <div>
                  <div className='icon is-large'>
                    <i className="fa-regular fa-2x fa-circle-check" />
                  </div>
                  <hr />
                  <Link to={'/cart'}>
                    <button className='button is-danger'>
                        Terminar mi compra
                    </button>
                  </Link>
                </div>
            }     
          </div>
        </div>
        <button className='button is-black' onClick={handleBack}>Atrás</button>
      </div>
      
    </article>
  )
}

export default ItemDetail