import React from "react";
import { Link } from "react-router-dom";

function Item() {
  return (
    <section className="Items">
      <div className="Item">
        <img src="" alt="product-img" />
        <h2>Produkt</h2>
        <h3>100 kr</h3>
        <Link to="/ItemDetail"><button>&gt;</button></Link>
      </div>
      <div className="Item">
        <img src="" alt="product-img" />
        <h2>Produkt</h2>
        <h3>100 kr</h3>
        <Link to="/ItemDetail"><button>&gt;</button></Link>
      </div>
      <div className="Item">
        <img src="" alt="product-img" />
        <h2>Produkt</h2>
        <h3>100 kr</h3>
        <Link to="/ItemDetail"><button>&gt;</button></Link>
      </div>
    </section>
  );
}

export default Item;
