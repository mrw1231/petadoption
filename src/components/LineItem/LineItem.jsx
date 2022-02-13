import React from "react";

import "./LineItem.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div>{lineItem.item.name}</div>
      <img src={lineItem.item.image} alt="pet"></img>
      <div>${lineItem.extPrice.toFixed(2)}</div>
      <button
        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
      >Remove</button>
      <br></br>
      <br></br>
    </div>
  );
}