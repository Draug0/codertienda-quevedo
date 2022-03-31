import React from 'react'
import ItemCount from '../ItemCount'
import { useNavigate } from 'react-router-dom'
import './itemDetail.css'

const ItemDetail = ({ item }) => {
  const onAdd = (amount) =>{
    console.log(amount)
  }

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  
  return (
    <article className='media' id='media'>
      
      <figure className='media-left' style={{flexGrow: 1}}>
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
          <div className='content'	style={{paddingBottom: '5px'}}>
            <h3 className='has-text-white'>
              Precio: ${item.price}
            </h3>
          </div>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        <button className='button is-black' onClick={handleBack}>Atrás</button>
      </div>
      
    </article>
  )
}

export default ItemDetail