import React from 'react'
import Item from './Item'

const ItemList = ({ items, setId }) => {
  return (
    <div className='columns is-align-items-stretch'>
        {items.map(item => 
            <Item key={item.id} item={item} setId={setId} /> 
        )}
    </div>
  )
}

export default ItemList