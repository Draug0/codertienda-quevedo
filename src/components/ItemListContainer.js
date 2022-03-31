import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { mockFetch } from "../mock-async";
import ItemList from "./ItemList";

const ItemListContainer = ({ sale }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    
    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            mockFetch
                .then(response => {
                    if (categoryId) {
                        setItems(response.filter(item => item.category === categoryId))
                    } else if (sale) { 
                        setItems(response.filter(item => item.sale))
                    } else {
                        setItems(response)
                    }})
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false)
                })
        }, 2000)
    }, [categoryId, sale])

    return (
        <div className="container">
            {loading 
                ? <button className="button is-loading" />
                : (
                    <div className="box is-shadowless">
                        <p className="title" style={{textAlign: 'left'}}>
                            {sale ? 'Ofertas' : 'Catálogo'}
                        </p>
                        {categoryId && (<nav className='breadcrumb has-succeeds-separator' aria-label='breadcrumbs'>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li className="is-active">
                                    <a href="#" aria-current="page">{categoryId}</a>
                                </li>
                            </ul>
                        </nav>)}
                        <hr />
                        <ItemList items={items} />
                    </div>
                )
            }
        </div>
    )
}

export default ItemListContainer;