import React from 'react'
import ItemCount from './ItemCount'
import './itemDetail.css'

const ItemDetail = ({ item }) => {
  const onAdd = (amount) =>{
    console.log(amount)
  }
  
  return (
    <article className='media' id='media'>
      <figure className='media-left'>
        <p className='image'>
          <img id='image' src={item.pictureUrl} alt={item.title}/>
        </p>
      </figure>
      
      <div className='media-content'>
        <div className='content' id='info'>
          <h2>{item.title}</h2>
          <p>By (author) {item.author}</p>
          <hr />
          <h4>Description</h4>
          <p>
            {item.description}
          </p>
        </div>
      </div>

      <div className='media-right'>
        <div className='box is-shadowless' id='price-card'>
          <div className='content'>
            <h4>
              Price: ${item.price}
            </h4>
            <h5>
              Stock: {item.stock}
            </h5>
          </div>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail