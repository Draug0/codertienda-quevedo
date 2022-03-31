import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getItem } from '../mock-async'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)
  
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    setTimeout(() => {
      getItem(itemId)
        .then(response => {
          setItem(response)
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoading(false)
        })
    }, 2000)
  }, [itemId])

  return (
    <div className='container'>
        {loading 
          ? <button className="button is-loading" />
          : (<>
              <nav className='breadcrumb has-succeeds-separator is-small' aria-label='breadcrumbs'>
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={`/category/${item.category}`}>{item.category}</Link></li>
                  <li className="is-active">
                    <a href="#" aria-current="page">{item.title}</a>
                  </li>
                </ul>
              </nav>
              <hr />
              <ItemDetail item={item}/>
          </>)
        }
    </div>
  )
}

export default ItemDetailContainer