import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "./redux/actions/productActions";

// function CartItemOld({}) {
//   const [cartItems, setCartItems] = useState([]);

//   const handleRemoveProduct = (product) => {
//     const ProductExist = cartItems.find((items) => items.id === product.id);
//     if (ProductExist.quantity === 1) {
//       setCartItems(cartItems.filter((items) => items.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((items) =>
//           items.id === product.id
//             ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
//             : items
//         )
//       );
//     }
//   };

//   const handleAddProduct = (product) => {
//     const ProductExist = cartItems.find((items) => items.id === product.id);
//     if (ProductExist) {
//       setCartItems(
//         cartItems.map((items) =>
//           items.id === product.id
//             ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
//             : items
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const totalPrice = cartItems.reduce(
//     (price, items) => price + items.quantity * items.price,
//     0
//   );

//   return (
//     <div className="cart-item">
//       <div className="cart-item-header">Cart Items</div>

//       {cartItems.length === 0 && (
//         <div className="cart-item-empty"> No items are added. </div>
//       )}

//       <div>
//         {cartItems.map((items) => (
//           <div key={items.id} className="cart-item-list">
//             <img
//               className="cart-item-img"
//               src={items.image}
//               alt={items.title}
//             />
//             <h1>{items.title}</h1>
//             <h2>{items.price}</h2>
//             <div className="cart-item-function">
//               <button
//                 className="cart-item-add"
//                 onClick={() => handleAddProduct(items)}
//               >
//                 +
//               </button>
//               <button
//                 className="cart-item-remove"
//                 onClick={() => handleRemoveProduct(items)}
//               >
//                 -
//               </button>
//               <div>
//                 {items.quantity} * {items.price}
//               </div>
//               <h3>${totalPrice}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

const CartItem = () => {
  let product = useSelector((state) => state.product);
  const { image, title, price, } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  console.log(product);

  return (
    <div>
      {Object.keys(product).length === -1 ? (
        <div className="cart-item-empty"> No items are added. </div>
      ) : (
        <div className="item-detail">
          <img className="product-img" src={image} alt={title} />
          <h1>{title}</h1>
          <h2>${price}</h2>
        </div>
      )}
    </div>
  );
};

export default CartItem;
