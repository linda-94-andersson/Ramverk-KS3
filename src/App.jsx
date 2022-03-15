import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src="" alt="product-promotion" />
      <h1>Välkommen till TUNGSTORE</h1>
      <p>Vi har fullt på bilen i grejor</p>
      <p>Mycket prisvärt</p>

      <span>Klicka här för att se vår klipp</span>
      <Link to="/Galleri">
        <button>Se våra klipp</button>
      </Link>
    </div>
  );
}

export default App;
