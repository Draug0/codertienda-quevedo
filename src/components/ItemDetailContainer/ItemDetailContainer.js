import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((doc) => {
        const prod = { id: doc.id, ...doc.data() };
        setItem(prod);
        document.title = prod.title + ' - Red Book'
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <div className="container">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <nav
        className="breadcrumb has-succeeds-separator small"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <Link className="link-color" to={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link-color" to={`/category/${item.category}`}>
              {item.category && item.category.charAt(0).toUpperCase() + item.category.replace('-', ' ').slice(1)}
            </Link>
          </li>
          <li className="is-active">
            <a aria-current="page">{item.title}</a>
          </li>
        </ul>
      </nav>
      <hr />
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
