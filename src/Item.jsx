import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "./data/Data";

function Item() {
  const { items } = Data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((items) => items.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((items) =>
          items.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : items
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <section className="items">
      {items.map((items) => (
        <div className="item" key={items.id}>
          <img className="product-img" src={items.image} alt={items.title} />
          <h2>{items.title}</h2>
          <h3>${items.price}</h3>
          <Link to="/itemDetail" items={items}>
            <button>More &gt;</button>
          </Link>
          <button onClick={() => handleAddProduct(items)}>Add to cart</button>
        </div>
      ))}
    </section>
  );
}

export default Item;
