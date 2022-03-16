import React from "react";
import CartItem from "../CartItem";
import { Counter } from "../test redux/Counter";
import Header from "../containers/Header";

function Cart() {

  return (
    <div className="Cart">
      <Header />
      <CartItem />
      <div>
        <h2>Frakt</h2>
        <h3>0 kr</h3>
        <h2>Totalt</h2>
        <h3>599kr</h3>
        <button>Checkout</button>
      </div>
      <Counter/>
    </div>
  );
}

export default Cart;
