import React, {useState} from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    
    return (
        <div className="container">
            <div className="hero-body">
                <div className="box">
                    <ItemCount stock={5} initial={0} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;