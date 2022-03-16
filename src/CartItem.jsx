import React, { useState } from "react";

function CartItem({ }) {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((items) => items.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((items) => items.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((items) =>
          items.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : items
        )
      );
    }
  };

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

  const totalPrice = cartItems.reduce(
    (price, items) => price + items.quantity * items.price,
    0
  );

  return (
    <div className="Cart-item">
      <div className="cart-item-header">Cart Items</div>

      {cartItems.length === 0 && (
        <div className="cart-item-empty"> No items are added. </div>
      )}

      <div>
        {cartItems.map((items) => (
          <div key={items.id} className="cart-item-list">
            <img className="cart-item-img" src={items.image} alt={items.title} />
            <h1>{items.title}</h1>
            <h2>{items.price}</h2>
            <div className="cart-item-function">
              <button
                className="cart-item-add"
                onClick={() => handleAddProduct(items)}
              >
                +
              </button>
              <button
                className="cart-item-remove"
                onClick={() => handleRemoveProduct(items)}
              >
                -
              </button>
              <div>
                {items.quantity} * {items.price}
              </div>
              <h3>${totalPrice}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItem;
