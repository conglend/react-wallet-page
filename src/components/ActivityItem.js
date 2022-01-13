import React from "react";

const ActivityItem = ({ activity }) => {
  return (
    <div className="activity-item d-flex">
      <div className="activity-item-icon">
        <img src={activity.icon} alt="" />
      </div>
      <div>
        <p className="description">
          <span>{activity.user}</span> {activity.text}
        </p>
        <p className="days-ago">{activity.day} days ago</p>
      </div>
    </div>
  );
};

export default ActivityItem;
