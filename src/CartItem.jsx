import React, { useState } from "react";

function CartItem({ handleAddProduct }) {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="Cart-item">
      <div className="cart-item-header">Cart Items</div>

      {cartItems.length === 0 && (
        <div className="cart-item-empty"> No items are added. </div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img className="cart-item-img" src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <div className="cart-item-function">
              <button
                className="cart-item-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-item-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
              <div>
                {item.quantity} * {item.price}
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
