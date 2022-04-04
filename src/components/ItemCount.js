import React, { useState } from "react";

const ItemCount = ({ stock, amount, setAmount, onAdd }) => {
    const handleAmount = (action) => {
        if (action === 'sumar' && amount < stock) {
            setAmount(amount + 1)
        } else if (action === 'restar' && amount > 0){
            setAmount(amount - 1)
        }
    }

    if (amount > stock) {
        setAmount(0)
    }
    
    
    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
                
            <div className='buttons has-addons'>
                <button 
                    className={`button is-danger ${stock === 1 || amount === 1 ? 'is-static' : ''}`}
                    onClick={() => handleAmount('restar')}    
                >
                    <span className="icon is-small">
                        <i className="fa-solid fa-minus" />
                    </span>
                </button>
                
                <button className="button is-static">{amount}</button>
                
                <button 
                    className={`button is-danger ${amount === stock ? 'is-static' : ''}`}
                    onClick={() => handleAmount('sumar')}
                >
                    <span className="icon is-small">
                        <i className="fa-solid fa-lg fa-plus" />
                    </span>
                </button>
            </div>

            <div className="content">
                <h6 className="has-text-white">¡{stock} disponible!</h6>
            </div>

            <button className='button is-danger' onClick={onAdd}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount;