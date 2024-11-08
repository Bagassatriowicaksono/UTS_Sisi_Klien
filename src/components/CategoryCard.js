// src/components/CategoryCard.js
import React from 'react';

const CategoryCard = ({ title, amount }) => {
  return (
    <div className="category-card">
      <h3>{title}</h3>
      <p>${amount}</p>
      <button>Adjust</button>
    </div>
  );
};

export default CategoryCard;
