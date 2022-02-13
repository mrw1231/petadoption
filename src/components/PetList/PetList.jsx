import React from "react";
import Pet from "../Pet/Pet";

export default function PetList({ pets }) {
    const animals = pets.map(pet =>
      <Pet
        pet={pet}
        key={pet._id}
      />
    );
    return (
      <main className="MenuList">
        {animals}
      </main>
    );
  }