import React from "react";
import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <button
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
    {cat}
    </button>
  );
  return (
    <div className="CategoryList">
      {cats}
    </div>
  );
}
