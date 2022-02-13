import React from "react";
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import PetList from "../../components/PetList/PetList";

function PetPage({ user, handleAddToOrder }) {
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);
    const [pets, setPets] = useState([]);
    useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          categoriesRef.current = items.reduce((acc, item) => {
            const cat = item.category.name;
            return acc.includes(cat) ? acc : [...acc, cat]
          }, []);
          setPets(items);
          setActiveCat(items[0].category.name);
        }
        getItems();
    }, []);
    return (
        <div>
            <h1>Pets</h1>
            <CategoryList
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
            />
            <PetList
                pets={pets.filter(pet => pet.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
                user={user}
            />
        </div>
    )
}

export default PetPage;