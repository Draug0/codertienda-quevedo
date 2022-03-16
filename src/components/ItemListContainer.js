import React, {useState} from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const [ initial, setInitial ] = useState(0)

    const onAdd = (action, stock) => {
        if (action == 'sumar') {
            setInitial(initial + 1)
        } else {
            setInitial(initial - 1)
        }
    }
    
    return (
        <div className="container">
            <div className="hero-body">
                <div className="box">
                    <ItemCount stock={3} initial={initial} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;