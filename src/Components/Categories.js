import React, { useState } from "react";

const Categories = ({ categories , filterCategory }) => {
  const [mainCat , setMainCat] = useState("all")
  return (
    <div className="btn-container">
      {categories.map((category,index) => (
        <button
        key={index}
          type="button"
          className={`filter-btn ${category === mainCat ? "highlight" : ""}`}
          onClick={()=>{
            setMainCat(category) 
            filterCategory(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
