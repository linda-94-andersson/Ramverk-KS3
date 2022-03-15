import React from "react";
import Item from "../Item";
import Navbar from "../Navbar";

function Galleri({ items }) {

  return (
    <div className="Galleri">
      <Navbar items={items}/>
      <h2>Våra klipp</h2>
      <Item items={items} />
    </div>
  );
}

export default Galleri;
