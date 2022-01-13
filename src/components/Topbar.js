import React from "react";
import { useNavigate } from "react-router-dom";

import backIcon from "../assets/images/svg/back.svg";
import homeIcon from "../assets/images/svg/home.svg";
import notificationIcon from "../assets/images/svg/notification.svg";
import settingsIcon from "../assets/images/svg/settings.svg";

const Topbar = () => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate("/");
  };

  return (
    <div className="topbar d-flex">
      <div className="d-flex">
        <img src={backIcon} alt="" className="cursor" onClick={() => goToBackPage()} />
        <img src={homeIcon} alt="" className="cursor" />
      </div>
      <div className="d-flex">
        <img src={notificationIcon} alt="" className="cursor" />
        <img src={settingsIcon} alt="" className="cursor" />
      </div>
    </div>
  );
};

export default Topbar;
