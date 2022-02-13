import React from "react";
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from '../../components/CategoryList/CategoryList';

function PetPage({ user, setUser }) {
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);
    useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          console.log(items);
          categoriesRef.current = items.reduce((acc, item) => {
            const cat = item.category.name;
            return acc.includes(cat) ? acc : [...acc, cat]
          }, []);
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
        </div>
    )
}

export default PetPage;