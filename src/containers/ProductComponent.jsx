import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { CartState } from "../context/Context";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const {
    state: { cart },
    productState: { sort, searchQuery },
    cartDispatch,
  } = CartState();


  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  const renderList = transformProducts().map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <section className="items" key={id}>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="item">
            <Link to={`/product/${id}`}>
              <img className="product-img" src={image} alt={title} />
              <h2>{title}</h2>
              <h3>${price}</h3>
              <h4>{category}</h4>
              <Button>More &gt;</Button>
            </Link>
            {cart.some((p) => p.id === id) ? (
              <Button
                onClick={() => {
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
                variant="danger"
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        )}
      </section>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
