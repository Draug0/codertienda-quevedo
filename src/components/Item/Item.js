import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const styles = {
  ribbon: {
    color: "white",
    position: "relative",
    top: "-12px",
    textAlign: "center",
    right: "-7px",
  },
};

const Item = ({ item }) => {
  return (
    <div className="column is-one-quarter-fullhd is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile">
      <div className="card" id="card">
        <div className="bookmarkRibbon">
          <span style={styles.ribbon}>${item.price}</span>
        </div>

        <div className="card-image">
          <Link to={`/item/${item.id}`} className="image is-4by5">
            <img src={item.pictureUrl} alt={item.title} />
          </Link>
        </div>

        <div className="card-content">
          <div className="content is-family-secondary	">
            <Link to={`/item/${item.id}`} className="subtitle">{item.title}</Link>
            <p>By {item.author}</p>
          </div>
        </div>

        <footer className="card-footer" id='card-footer'>
          <Link to={`/item/${item.id}`} className="card-footer-item">
            Más información
          </Link>
          <p className="card-footer-item">
            <span>Stock: {item.stock}</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Item;
