import React, {useState, useEffect} from "react";
import mockFetch from "../mock-async";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            mockFetch.then(response => {
                setItems(response)
            }).catch(err => console.log(err))
        }, 2000)
    })

    return (
        <div className="hero-body">
            <div className="container">
                <div className="box is-shadowless">
                    {items.length === 0 && <button className="button is-loading" />}
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;