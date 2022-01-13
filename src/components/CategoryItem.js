import React from "react";
import arrowIcon from "../assets/images/svg/arrow_right.svg";

const CategoryItem = ({ category }) => {
  return (
    <div className="popular-categories-list-item" style={{ backgroundColor: `${category.color}` }}>
      <div className="popular-categories-list-item-icon">
        <img src={category.icon} alt="" />
      </div>
      <div className="d-flex">
        <span>{category.text}</span>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default CategoryItem;
