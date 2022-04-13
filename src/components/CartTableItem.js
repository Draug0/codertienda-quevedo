import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartTableItem = ({ item }) => {
  const [ showEdit, setShowEdit ] = useState(false)
  const [ amountEdit, setAmountEdit ] = useState(item.amount)
  
  const { removeItem, editAmount } = useContext(CartContext)

  const toggleEdit = () => {
    setShowEdit(true)
  }

  const handleRemove = () => {
    removeItem(item.id)
  }

  const handleAmount = (e) => {
    setAmountEdit(e.target.value)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    editAmount(item.id, Number(amountEdit))
    setShowEdit(false)
  }

  return (
    <tr>
      <td className='is-hidden-mobile'>{item.id}</td>
      <td>
        <Link to={`/item/${item.id}`}>
          {item.title}
        </Link>
      </td>
      <td>

        {showEdit ? (
          <span className='icon-text'>
            <span>
              <form onSubmit={handleEdit} >
                <input 
                  type='number' 
                  onChange={handleAmount}
                  value={amountEdit}
                  autoFocus 
                  min={1} 
                  max={item.stock}
                />
              </form>
            </span>
            <span className='icon' id='done' onClick={handleEdit}>
              <i className='fa-solid fa-check'/>
            </span>
          </span>
        ) : (
          <span className='icon-text'>
            <span>
              {item.amount}  
            </span>
            <span className='icon' id='amount-edit' onClick={toggleEdit}>
              <i className='fa-solid fas fa-pen' />
            </span> 
          </span>
        )}
        
      </td>
      <td>$ {item.quantity * item.price}</td>
      <td>
        <span className='icon' id='delete-item' onClick={handleRemove}>
          <i className="fa-solid fa-trash" />
        </span>
      </td>
    </tr>
  )
}

export default CartTableItem