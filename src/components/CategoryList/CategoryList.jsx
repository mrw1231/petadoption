import React from "react";
import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li>
      key={cat}
    </li>
  );
  return (
    <ul>
      {cats}
    </ul>
  );
}
