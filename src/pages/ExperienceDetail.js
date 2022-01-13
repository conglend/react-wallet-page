import React, { useState } from "react";
import recentExpIcon2 from "../assets/images/svg/recent-exp1.svg";
import shareIcon from "../assets/images/svg/share.svg";
import openIcon from "../assets/images/svg/open.svg";
import peopleIcon from "../assets/images/svg/people.svg";

import activityIcon1 from "../assets/images/svg/activity1.svg";
import activityIcon2 from "../assets/images/svg/activity2.svg";

import globeIcon from "../assets/images/svg/globe.svg";
import arrowDownIcon from "../assets/images/svg/arrow_down.svg";

import ActivityItem from "../components/ActivityItem";

const tabs = [
  { id: 1, label: 'Details' },
  { id: 2, label: 'Activities' },
];

const activities = [
  { id: 1, icon: activityIcon1, user: 'johndoe.near', text: 'signed the contract successfully', day: 2, },
  { id: 2, icon: activityIcon2, user: 'CryptoKing.near', text: 'requested to sign the contract', day: 3, },   
]

const ExperienceDetailPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleContent, setVisibleContent] = useState(false);

  return (
    <div className="experience-detail-page">
      <div className="page-header-bg" />
      <div className="top-content">
        <div className="d-flex page-header">
          <div className="main-icon">
            <img src={recentExpIcon2} alt="" />            
          </div>
          <div className="d-flex share-link">
            <img src={shareIcon} alt="" className="share-icon" />
            <span>Share</span>
          </div>
        </div>
        <div className="description-section">
          <h5>Docu sign</h5>
          <p className="description">sign smart contracts seamlessly</p>
          <p className="category">Utilities</p>
        </div>
        <div className="members-count d-flex">
          <button className="cursor open-link">
            <span>Open</span>
            <img src={openIcon} alt="" />
          </button>
          <div className="d-flex mumbers">
            <img src={peopleIcon} alt="" />
            <p>24,000+ users</p>
          </div>
        </div>
      </div>
      <div className="custom-tabs">
        {tabs.map((tab) => (
          <div className={`tab-item ${activeTab === tab.id ? 'active' : ''}`} onClickCapture={() => setActiveTab(tab.id)} key={tab.id}>
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="overview-section">
            <div className="d-flex detail-header">
              <h6>Overview</h6>
              <img src={arrowDownIcon} alt="" className={!visibleContent ? 'detail-hidden' : 'detail-visible'} onClickCapture={() => setVisibleContent(!visibleContent)} />
            </div>
            {visibleContent && (
              <>
                <div className="description">
                  it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. 
                </div>
                <a href="https://docusignn.io" target="_blank" rel="noreferrer">
                  <img src={globeIcon} alt="" />
                  <span>https://docusignn.io</span>
                </a>
              </>
            )}
          </div>
        )}

        {activeTab === 2 && (
          <div className="activity-list">
            <div className="activity-found">{activities.length} activity found</div>
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />                
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
