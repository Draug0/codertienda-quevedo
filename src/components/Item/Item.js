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
        {item.sale && (
          <div className="bookmarkRibbon">
            <span style={styles.ribbon}>- 10%</span>
          </div>
        )}
        <div className="card-image">
          <Link to={`/item/${item.id}`} className="image is-4by5">
            <img src={item.pictureUrl} alt={item.title} />
          </Link>
        </div>

        <div className="card-content" id='card-content'>
          <div className="content is-family-secondary" id='content'>
            <div style={{marginBottom: '5%'}}>
              <Link to={`/item/${item.id}`} className="subtitle">{item.title}</Link>
              <p className="has-text-grey-light">By {item.author}</p>
            </div>
            <div className="price">
              <div>
                <p className="subtitle has-text-weight-semibold">
                  {item.sale ? (
                    <span>
                      ${item.price - item.price / 10}
                        <span className="has-text-grey-lighter" style={{marginLeft: '4px'}}>
                          <del>${item.price}</del>
                        </span>
                    </span>
                    ) : (
                      <span>${item.price}</span>
                  )}
                </p>
              </div>
              <div>
                <p>¡{item.stock} en stock!</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="card-footer" id='card-footer'>
          <Link to={`/item/${item.id}`} className="card-footer-item link-color">
            <span className="icon-text">
              <span className="icon">
                <i className="fa-solid fa-circle-info"/>
              </span>
              <span>
                Más información
              </span>
            </span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Item;
