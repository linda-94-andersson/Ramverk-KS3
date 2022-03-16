import React from "react";
import Item from "../Item";
import Header from "../containers/Header";

function Galleri({ items }) {

  return (
    <div className="Galleri">
      <Header items={items}/>
      <h2>Våra klipp</h2>
      <Item items={items} />
    </div>
  );
}

export default Galleri;
