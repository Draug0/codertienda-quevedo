import React, {useState} from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [ amount, setAmount ] = useState(initial)

    const handleAmount = (action) => {
        if (action == 'sumar') {
            setAmount(amount + 1)
        } else {
            setAmount(amount - 1)
        }
    }
    
    
    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="content">
                <h2>Item</h2>
                <p>Stock: {stock}</p>
            </div>
                
            <div className='buttons has-addons'>
                <button 
                    className={`button is-danger ${stock == 0 || amount == 0 ? 'is-static' : ''}`}
                    onClick={() => handleAmount('restar')}    
                >
                    <span className="icon is-small">
                        <i className="fa-solid fa-minus" />
                    </span>
                </button>
                
                <button className="button is-static">{amount}</button>
                
                <button 
                    className={`button is-danger ${amount == stock ? 'is-static' : ''}`}
                    onClick={() => handleAmount('sumar')}
                >
                    <span className="icon is-small">
                        <i className="fa-solid fa-lg fa-plus" />
                    </span>
                </button>
            </div>

            <button className={`button is-dark ${amount == 0 ? 'is-static' : ''}`} onClick={() => onAdd(amount)}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount;