import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products: ",products);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
