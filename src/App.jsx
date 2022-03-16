import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";

// import Galleri from "./routes/Galleri";
// import Cart from "./routes/Cart";
// import ItemDetail from "./routes/ItemDetail";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact component={ProductListing}  element={<ProductListing/>}/>
          <Route path="/product/:productId" exact component={ProductDetail} element={<ProductDetail/>}/>
          <Route>404 Not Found!</Route>

          {/* <Route path="/" element={<App />} />
          <Route path="Galleri" element={<Galleri />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="ItemDetail" element={<ItemDetail />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <img src="" alt="product-promotion" />
      <h1>Välkommen till TUNGSTORE</h1>
      <p>Vi har fullt på bilen i grejor</p>
      <p>Mycket prisvärt</p>

      <span>Klicka här för att se vår klipp</span>
      <Link to="/Galleri">
        <button>Se våra klipp</button>
      </Link> */}
    </div>
  );
}

export default App;
