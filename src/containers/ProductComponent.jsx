import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <section className="items" key={id}>
        <div className="item">
          <Link to={`/product/${id}`}>
            <img className="product-img" src={image} alt={title} />
            <h2>{title}</h2>
            <h3>${price}</h3>
            <h4>{category}</h4>
            <button>More &gt;</button>
          </Link>
          <Link to="/cart">
            <button>Add to cart</button>
          </Link>
        </div>
      </section>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
