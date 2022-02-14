import React from "react";

import "./LineItem.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <h3>{lineItem.item.name}</h3>
      <img src={lineItem.item.image} alt="pet"></img>
      <div className="LineItemPrice">${lineItem.extPrice.toFixed(2)}</div>
      <button
        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
      >Remove</button>
      <br></br>
      <br></br>
    </div>
  );
}