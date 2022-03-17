import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Button, Card } from "react-bootstrap";

const ProductDetail = () => {
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
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
              <Button variant="danger">Remove from cart</Button>
              <Button>Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
