import React from "react";

const CheckboxItem = ({ category, checked, handleCategorySelect }) => {
  return (
    <div className="checkbox-item d-flex">
      <div className="d-flex">
        <input 
          className="custom-checkbox" 
          id={`category-select-` + category.id } 
          type="checkbox" 
          checked={checked}
          onChange={() => handleCategorySelect(category.id)}
        />
        <label id={`category-select-` + category.id } onClickCapture={() => handleCategorySelect(category.id)}></label>
      </div>
      <img src={category.icon} alt="" />
      <span>{category.text}</span>
    </div>
  );
};

export default CheckboxItem;
