import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { db } from "../firebase/config";

const ItemListContainer = ({ sale }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    document.title = `${
      categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.replace('-', ' ').slice(1) 
        : sale ? 'Ofertas' : 'Inicio'
    } - Red Book`

    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : sale
      ? query(productosRef, where("sale", "==", true))
      : productosRef;

    getDocs(q)
      .then((response) => {
        const items = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(items);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, sale]);

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
      <div className="box is-shadowless">
        <p className="title" style={{ textAlign: "left" }}>
          {sale ? "Ofertas" : "Catálogo"}
        </p>
        {categoryId && (
          <nav
            className="breadcrumb has-succeeds-separator"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <Link className="link-color" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  {categoryId && categoryId.charAt(0).toUpperCase() + categoryId.replace('-', ' ').slice(1)}
                </a>
              </li>
            </ul>
          </nav>
        )}
        <hr />
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
