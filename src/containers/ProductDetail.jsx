import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loadig</div>
      ) : (
        <div className="item-detail">
          <img className="product-img" src={image} alt={title} />
          <h1>{title}</h1>
          <h2>${price}</h2>
          <h3>Product information</h3>
          <h4>{category}</h4>
          <p>{description}</p>
          <Link to="/cart">
            <button>Add to Cart</button>
          </Link>
        </div>
      )}
      ;
    </div>
  );
};

export default ProductDetail;
