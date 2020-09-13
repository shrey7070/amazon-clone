import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Subtotal() {
  let total = 0;
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
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
        value={getBasketTotal(basket)} //part of hw
        displayType={"text"}
        thousandSepararator={true}
        prefix={"₹"}
      />
      <Button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </Button>
    </div>
  );
}
export default Subtotal;
