import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store'

import "./style/index.css";
import App from "./App";
import Galleri from "./routes/Galleri";
import Cart from "./routes/Cart";
import ItemDetail from "./routes/ItemDetail"; 

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Galleri" element={<Galleri />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="ItemDetail" element={<ItemDetail/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
