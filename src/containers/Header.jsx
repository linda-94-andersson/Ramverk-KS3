import React from "react";
import {
  Badge,
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <h2>TUNG STORE</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              Go to Cart
            </Link>
          </li>
        </ul>
      </nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <i
                className="fa-solid fa-cart-shopping"
                color="white"
                fontSize="25px"
              ></i>
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>

    </Navbar>
  );
};

export default Header;
