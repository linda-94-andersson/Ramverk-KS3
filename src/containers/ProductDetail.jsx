import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";

const ProductDetail = () => {
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const reduxDispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      reduxDispatch(removeSelectedProduct());
    };
  }, [productId]);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="item-detail">
          <Card>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
              <Card.Title>
                <h1>{title}</h1>
              </Card.Title>
              <Card.Subtitle style={{ paddingBottom: 10 }}>
                <h2>${price}</h2>
                <h3>Product information</h3>
                <h4>{category}</h4>
                <p>{description}</p>
              </Card.Subtitle>
              {cart.some((p) => p.id === productId) ? (
                <Button onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }} variant="danger">Remove from cart</Button>
              ) : (
                <Button onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }}>Add to Cart</Button>
              )}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
