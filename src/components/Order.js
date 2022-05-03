import React from "react";

const Order = ({ order, orderId }) => {
  const fecha = new Date(order.date.seconds * 1000);

  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const optionsTime = { hour: "2-digit", minute: "2-digit" };

  return (
    <div>
      <h4>Datos de la compra</h4>
      <blockquote style={{ textAlign: "left" }}>
        <p>
          <strong>Nº de orden:</strong> {orderId}
        </p>
        <p>
          <strong>Nombre:</strong> {order.buyer.name}
        </p>
        <p>
          <strong>Email:</strong> {order.buyer.email}
        </p>
        <p>
          <strong>Nº de teléfono:</strong> {order.buyer.phone}
        </p>
        <p>
          <strong>Libros:</strong>
        </p>

        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <strong>Fecha:</strong> {fecha.toLocaleDateString("es", optionsDate)}
        </p>
        <p>
          <strong>Hora:</strong> {fecha.toLocaleTimeString("es", optionsTime)}
        </p>
        <p>
          <strong>Total:</strong> ${order.total}
        </p>
      </blockquote>
    </div>
  );
};

export default Order;
