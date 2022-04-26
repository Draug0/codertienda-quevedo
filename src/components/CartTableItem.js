import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartTableItem = ({ item }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [quantityEdit, setQuantityEdit] = useState(item.quantity);

  const { removeItem, editQuantity } = useContext(CartContext);

  const toggleEdit = () => {
    setShowEdit(true);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const handleQuantity = (e) => {
    setQuantityEdit(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editQuantity(item.id, Number(quantityEdit));
    setShowEdit(false);
  };

  return (
    <tr>
      <td className="is-hidden-mobile">{item.id}</td>
      <td>
        <Link className="link-color" to={`/item/${item.id}`}>
          {item.title}
        </Link>
      </td>
      <td>
        {showEdit ? (
          <span className="icon-text">
            <span>
              <form onSubmit={handleEdit}>
                <input
                  type="number"
                  onChange={handleQuantity}
                  value={quantityEdit}
                  autoFocus
                  min={1}
                  max={item.stock}
                />
              </form>
            </span>
            <span className="icon" id="done" type='submit' onClick={handleEdit}>
              <i className="fa-solid fa-check" />
            </span>
          </span>
        ) : (
          <span className="icon-text">
            <span>{item.quantity}</span>
            <span className="icon" id="amount-edit" onClick={toggleEdit}>
              <i className="fa-solid fas fa-pen" />
            </span>
          </span>
        )}
      </td>
      <td>$ {item.quantity * item.price}</td>
      <td>
        <span className="icon" id="delete-item" onClick={handleRemove}>
          <i className="fa-solid fa-trash" />
        </span>
      </td>
    </tr>
  );
};

export default CartTableItem;
