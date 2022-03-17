import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <img src="" alt="product-promotion" /> 
    <h1>Välkommen till TUNGSTORE</h1>
    <p>Vi har fullt på bilen i grejor</p>
    <p>Mycket prisvärt</p>

    <span>Klicka här för att se vår klipp</span>
    <Link to="/products">
      <button>Se våra klipp</button>
    </Link>
    </div>
  );
}

export default HomePage;
