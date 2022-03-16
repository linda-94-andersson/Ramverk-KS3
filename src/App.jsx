import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Cart from "./routes/Cart";
import ProductPage from "./containers/ProductPage";
import ProductDetail from "./containers/ProductDetail";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact component={HomePage} element={<HomePage />} />
          <Route
            path="/products"
            exact
            component={ProductPage}
            element={<ProductPage />}
          />
          <Route
            path="/product/:productId"
            exact
            component={ProductDetail}
            element={<ProductDetail />}
          />
          <Route path="cart" component={Cart} element={<Cart />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
