import "./Pet.css";
import React from "react";

export default function Pet({ user, pet, handleAddToOrder }) {
    return (
      <div className="Pet">
        <h3 className="PetName">{pet.name}</h3>
        <img src={pet.image} alt={pet.name}></img>
        <div className="PetPrice">${pet.price.toFixed(2)}</div>
        { user ?
            <button onClick={() => handleAddToOrder(pet._id)}>Reserve</button>
            :
            <></>
        }
      </div>
    );
  }