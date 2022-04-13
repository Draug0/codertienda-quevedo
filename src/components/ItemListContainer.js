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

  return (
    <div className="container">
      {loading ? (
        <button className="button is-loading" />
      ) : (
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
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    {categoryId}
                  </a>
                </li>
              </ul>
            </nav>
          )}
          <hr />
          <ItemList items={items} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
