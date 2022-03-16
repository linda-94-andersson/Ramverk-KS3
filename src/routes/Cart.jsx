import React from "react";
import CartItem from "../CartItem";
import { Counter } from "../test redux/Counter";
import testStore from "../redux/testStore";
import { Provider } from "react-redux";

function Cart() {
  return (
    <div className="cart">
      <CartItem />
      <div>
        <h2>Frakt</h2>
        <h3>0 kr</h3>
        <h2>Totalt</h2>
        <h3>599kr</h3>
        <button>Checkout</button>
      </div>
      <Provider store={testStore}>
        <Counter />
      </Provider>
    </div>
  );
}

export default Cart;
