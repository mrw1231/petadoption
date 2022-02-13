import "./Pet.css";
import React from "react";

export default function Pet({ pet }) {
    return (
      <div className="Pet">
        <div>{pet.name}</div>
        <div>${pet.price.toFixed(2)}</div>
        <img src={pet.image}></img>
      </div>
    );
  }