import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Steps.css";

const Steps = ({cart, info, order}) => {
  return (
    <ul className="steps is-medium is-centered has-content-centered" style={{marginTop: '30px'}}>
      <li className={`steps-segment 
        ${cart ? 'is-active has-gaps' : 'has-gaps'}
      `}>
        <Link to='/cart' className="has-text-dark">
          <span className="steps-marker">
            <span className="icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
          </span>
          <div className="steps-content">
            <p className="heading">Carrito</p>
          </div>
        </Link>
      </li>
      <li className={`steps-segment 
        ${info ? 'is-active has-gaps' : 'has-gaps'}
      `}>
        <Link to='/checkout' className="has-text-dark">
          <span className="steps-marker">
            <span className="icon">
              <i className="fa fa-user"></i>
            </span>
          </span>
          <div className="steps-content">
            <p className="heading">Información del Usuario</p>
          </div>
        </Link>
      </li>
      <li className={`steps-segment 
        ${order ? 'is-active' : 'has-gaps'}
      `}>
        <span className="steps-marker">
          <span className="icon">
            <i className="fa fa-check"></i>
          </span>
        </span>
        <div className="steps-content">
          <p className="heading">Orden</p>
        </div>
      </li>
    </ul>
  );
};

export default Steps;
