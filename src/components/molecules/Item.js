import React from 'react'
import './Item.css'
import ItemCount from '../atoms/ItemCount'

const styles = {
  ribbon: {
    color: 'white',
    position: 'relative',
    top: '-12px',
    textAlign: 'center',
    right: '-7px'
  }
}

const Item = ({ item }) => {
  const onAdd = (amount) =>{
    console.log(amount)
  }
  
  return (
    <div className='column'>
      <div className='card' id='card'>  
        <div className="bookmarkRibbon"><span style={styles.ribbon}>${item.price}</span></div>

        <div className='card-image'>
          <figure className='image is-3by4'>
            <img src={item.pictureUrl} alt={item.title} />
          </figure>
        </div>

        <div className='card-content'>
          <div className='content is-family-secondary	'>
            <p className='subtitle'>{item.title}</p>
          </div>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </div>

        <footer className='card-footer'>
          <a className='card-footer-item'>
            Más información
          </a>
          <p className='card-footer-item has-text-weight-semibold'>
            <span className='is-size-5'>
              Stock: {item.stock}
            </span>
          </p>
        </footer>

      </div>
    </div>
  )
}

export default Item
