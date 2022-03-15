import React from "react";
import { Link } from "react-router-dom";

function Navbar({ items }) {

  return (
    <nav className="nav">
      <h2>TUNG STORE</h2>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/Galleri" items={items}>
            Produkter
          </Link>
        </li>
        <li>
          <Link to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
