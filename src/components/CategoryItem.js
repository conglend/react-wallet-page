import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/images/svg/arrow_right.svg";

const CategoryItem = ({ category }) => {
  return (
    <div className="popular-categories-list-item" style={{ backgroundColor: `${category.color}` }}>
      <div className="popular-categories-list-item-icon">
        <img src={category.icon} alt="" />
      </div>
      <div className="d-flex">
        <span>{category.text}</span>
        <Link to="/detail"><img src={arrowIcon} alt="" /></Link>
      </div>
    </div>
  );
};

export default CategoryItem;
