 import React from 'react';
const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
const SideCatagories = () => {
  return (
        <div className="col-lg-8">
        {categories.map((item) => (
          <p>{item}</p>
        ))}
        </div>
      
  );
};

export default SideCatagories;
