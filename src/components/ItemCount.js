import React, {useEffect, useState} from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [ amount, setAmount ] = useState(initial)

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
                    className={`button is-danger ${stock === 0 || amount === 0 ? 'is-static' : ''}`}
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

            <button className={`button is-dark ${amount === 0 ? 'is-static' : ''}`} onClick={() => onAdd(amount)}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount;