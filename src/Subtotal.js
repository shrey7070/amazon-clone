import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  let total = 0;
  const [{ basket }, dispatch] = useStateValue();
  const getTotalSubtotal = (basket) => {
    for (var i = 0; i < basket.length; i++) {
      console.log("getTotaslSubtotal -> basket[i].price", basket[i].price);
      total = total + basket[i].price;
    }
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gifts
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalSubtotal(basket)} //part of hw
        displayType={"text"}
        thousandSepararator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
export default Subtotal;
