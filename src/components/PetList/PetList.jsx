import React from "react";
import Pet from "../Pet/Pet";

export default function PetList({ user, pets, handleAddToOrder }) {
    const animals = pets.map(pet =>
      <Pet
        pet={pet}
        key={pet._id}
        handleAddToOrder={handleAddToOrder}
        user={user}
      />
    );
    return (
      <main>
        {animals}
      </main>
    );
  }