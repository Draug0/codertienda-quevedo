import React, { useEffect, useState } from 'react'
import { getItem } from '../mock-async'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState({})
  

  useEffect(() => {
    setTimeout(() => {
      getItem(id).then(response => {
        setItem(response)
      })
    }, 2000)
  })

  return (
    <div className='container' style={{marginTop: '20px'}}>
        {item.title && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer