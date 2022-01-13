import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/images/svg/arrow_right.svg";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experiences-item d-flex">
      <div className="d-flex">
        <div className="experiences-item-icon">
          <img src={experience.icon} alt="" />
        </div>
        <div>
          <h5 className="experiences-item-title">{experience.title}</h5>
          <p className="experiences-item-description">{experience.description}</p>
          <p className="experiences-item-members">{experience.memberNumbers}</p>
        </div>
      </div>
      <Link to="/detail"><img src={arrowIcon} alt="" /></Link>
    </div>
  );
};

export default ExperienceItem;
