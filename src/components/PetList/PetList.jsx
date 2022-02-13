import React from "react";
import Pet from "../Pet/Pet";

export default function PetList({ pets, handleAddToOrder }) {
    const animals = pets.map(pet =>
      <Pet
        pet={pet}
        key={pet._id}
        handleAddToOrder={handleAddToOrder}
      />
    );
    return (
      <main>
        {animals}
      </main>
    );
  }