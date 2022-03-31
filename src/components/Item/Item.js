import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

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
  
  return (
    <div className='column is-one-quarter-fullhd is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile'> 
      
      <div className='card' id='card'>  
        <div className="bookmarkRibbon"><span style={styles.ribbon}>${item.price}</span></div>

        <div className='card-image'>
          <figure className='image is-4by5'>
            <img src={item.pictureUrl} alt={item.title} />
          </figure>
        </div>

        <div className='card-content'>
          <div className='content is-family-secondary	'>
            <p className='subtitle'>{item.title}</p>
            <p>By {item.author}</p>
          </div>
        </div>

        <footer className='card-footer'>
          <Link to={`/item/${item.id}`} className='card-footer-item'>
            Más información
          </Link>
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
