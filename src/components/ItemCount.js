import React from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    return (
        <div className="content">
            <h2>Item</h2>
            <p>Stock: {stock}</p>
            
            <div className='buttons has-addons'>
                <button 
                    className={`button is-danger ${stock == 0 || initial == 0 ? 'is-static' : ''}`}
                    onClick={() => onAdd('restar')}    
                >
                    <span className="icon is-small">
                        <i className="fa-solid fa-minus" />
                    </span>
                </button>
                
                <button className="button is-static">{initial}</button>
                
                <button 
                    className={`button is-danger ${initial == stock ? 'is-static' : ''}`}
                    onClick={() => onAdd('sumar')}
                >
                    <span className="icon is-small">
                        <i class="fa-solid fa-lg fa-plus" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ItemCount;