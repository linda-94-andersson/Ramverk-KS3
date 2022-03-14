import React from "react";
import ItemDetail from "./ItemDetail";

function Item() {
  return (
    <>
      <div className="Item">
        <img src="" alt="product-img" />
        <h2>Produkt</h2>
        <h3>100 kr</h3>
        <button>&gt;</button>
        <ItemDetail />
      </div>
      <div className="Item">
        <img src="" alt="product-img" />
        <h2>Produkt</h2>
        <h3>100 kr</h3>
        <button>&gt;</button>
        <ItemDetail />
      </div>
      <div className="Item">
        <img src="" alt="product-img" />
        <h2>Produkt</h2>
        <h3>100 kr</h3>
        <button>&gt;</button>
        <ItemDetail />
      </div>
    </>
  );
}

export default Item;
