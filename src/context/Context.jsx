import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(fetchProducts());
  }, []);

  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
  }));

  console.log(cartProducts);

  const [state, dispatch] = useReducer(cartReducer, {
    products: cartProducts,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
