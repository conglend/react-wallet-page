import React from "react";

const ActivityItem = ({ activity }) => {
  return (
    <div className="activity-item d-flex">
      <div className="activity-item-icon" data-testid="activity-icon">
        <img src={activity.icon} alt="" />
      </div>
      <div>
        <p className="description" data-testid="activity-description">
          <span>{activity.user}</span> {activity.text}
        </p>
        <p className="days-ago" data-testid="activity-date">{activity.day} days ago</p>
      </div>
    </div>
  );
};

export default ActivityItem;
