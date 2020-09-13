import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <p>
        Time: {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order__id">
        <strong>
          Order id: <small>{order.id}</small>
        </strong>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <strong className="order__total">Order Total: {value}</strong>
        )}
        decimalScale={2}
        value={order.data.amount / 100} //part of hw
        displayType={"text"}
        thousandSepararator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
