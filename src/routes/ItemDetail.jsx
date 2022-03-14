import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function ItemDetail() {
  return (
    <div className="item-detail">
      <Navbar />
      <img src="" alt="produkt-detail" />
      <h1>Produkt</h1>
      <h2>599kr</h2>
      <Link to="/Cart"><button>Lägg i varukorg</button></Link>
      <h3>Produktionfromation</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        obcaecati numquam voluptas at ad laudantium, eum debitis repudiandae
        delectus, adipisci unde aspernatur harum tenetur placeat eveniet,
        laborum atque distinctio dolor?
      </p>
    </div>
  );
}

export default ItemDetail;
