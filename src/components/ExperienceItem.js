import React from "react";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../assets/images/svg/arrow_right.svg";

const ExperienceItem = ({ experience }) => {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/experience/${id}`);
  };

  return (
    <div
      className="experiences-item d-flex cursor"
      onClick={() => goToDetailPage(experience.id)}
    >
      <div className="d-flex">
        <div className="experiences-item-icon">
          <img src={experience.icon} alt="" />
        </div>
        <div>
          <h5 className="experiences-item-title">{experience.title}</h5>
          <p className="experiences-item-description">
            {experience.description}
          </p>
          <p className="experiences-item-members">{experience.usersCountStr}</p>
        </div>
      </div>
      <img src={arrowIcon} alt="" />
    </div>
  );
};

export default ExperienceItem;
