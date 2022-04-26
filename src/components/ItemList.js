import React from 'react'
import Item from './Item/Item'

const ItemList = ({ items }) => {
  return (
    <div className='columns is-mobile is-multiline is-align-items-stretch'>
        {items.map(item => 
            <Item key={item.id} item={item} /> 
        )}
    </div>
  )
}

export default ItemList