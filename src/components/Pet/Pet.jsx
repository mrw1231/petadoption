import React from "react";

export default function Pet({ pet }) {
    return (
      <div>
        <div>{pet.name}</div>
        <div>${pet.price.toFixed(2)}</div>
      </div>
    );
  }