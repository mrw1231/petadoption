import "./Pet.css";
import React from "react";

export default function Pet({ user, pet, handleAddToOrder }) {
    return (
      <div className="Pet">
        <div>{pet.name}</div>
        <div>${pet.price.toFixed(2)}</div>
        <img src={pet.image} alt={pet.name}></img>
        <br></br>
        { user ?
            <button onClick={() => handleAddToOrder(pet._id)}>Reserve</button>
            :
            <></>
        }
      </div>
    );
  }