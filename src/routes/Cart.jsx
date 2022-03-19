import React, { useEffect, useState } from "react";
import { Button, ListGroup, Row, Col, Form, Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";

function Cart() {
  const {
    state: { cart },
    cartDispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <div className="cart">
      <div className="productContainer">
        <ListGroup>
          {cart.map((props) => (
            <ListGroup.Item key={props.id} style={{ height: 200, width: 1000 }}>
              <Row>
                <Col md={2}>
                  <Image
                    style={{ objectFit: "contain", height: 180 }}
                    src={props.image}
                    alt={props.title}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{props.title}</span>
                </Col>
                <Col md={2}>
                  <span>${props.price}</span>
                </Col>
                <Col md={2}>
                  <Button
                    value={props.qty}
                    variant="dark"
                    onClick={(e) =>
                      cartDispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: props.id,
                          qty: e.target.value - 1,
                        },
                      })
                    }
                  >
                    -
                  </Button>

                  <Form.Control
                    as="select"
                    value={props.qty}
                    onChange={(e) =>
                      cartDispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: props.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(11).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                  {props.qty}
                  <Button
                    value={props.id}
                    variant="dark"
                    onClick={() => {
                      cartDispatch({
                        type: "ADD_TO_CART",
                        payload: {
                          id: props.qty,
                          qty: props.qty,
                        },
                      });
                    }}
                  >
                    +
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: props,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;

// .toFixed(2)
