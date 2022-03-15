import React from "react";
import CartItem from "../CartItem";
import Navbar from "../Navbar";

function Cart() {

  return (
    <div className="Cart">
      <Navbar />
      <CartItem />
      <div>
        <h2>Frakt</h2>
        <h3>0 kr</h3>
        <h2>Totalt</h2>
        <h3>599kr</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
