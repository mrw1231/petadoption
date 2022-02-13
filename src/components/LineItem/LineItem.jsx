import React from "react";

import "./LineItem.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div>{lineItem.item.name}</div>
      <img src={lineItem.item.image} alt="pet"></img>
      <div>${lineItem.extPrice.toFixed(2)}</div>
      <br></br>
    </div>
  );
}