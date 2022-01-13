import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import ActivityItem from "../components/ActivityItem";

import { popularCategories, activities } from "../constants";

import shareIcon from "../assets/images/svg/share.svg";
import openIcon from "../assets/images/svg/open.svg";
import globeIcon from "../assets/images/svg/globe.svg";
import arrowDownIcon from "../assets/images/svg/arrow_down.svg";
import peopleIcon from "../assets/images/svg/people.svg";

import { experiences } from "../constants";

const tabs = [
  { id: 1, label: "Details" },
  { id: 2, label: "Activities" },
];

const ExperienceDetailPage = () => {
  let { id } = useParams();

  const experience = experiences.find((e) => e.id === parseInt(id));
  const category = popularCategories.find((c) => c.id === experience.categoryId);

  const [activeTab, setActiveTab] = useState(1);
  const [visibleOverView, setVisibleOverView] = useState(true);

  return (
    <Layout>
      <div className="experience-detail-page">
        <div className="page-header-bg" />
        <div className="top-content">
          <div className="d-flex page-header">
            <div className="main-icon">
              <img src={experience?.icon} alt="" />
            </div>
            <div className="d-flex share-link cursor">
              <img src={shareIcon} alt="" className="share-icon" />
              <span>Share</span>
            </div>
          </div>
          <div className="description-section">
            <h5>{experience?.title}</h5>
            <p className="description">{experience?.description}</p>
            <p className="category">{category?.text}</p>
          </div>
          <div className="members-count d-flex">
            <button className="cursor open-link">
              <span>Open</span>
              <img src={openIcon} alt="" />
            </button>
            <div className="d-flex mumbers">
              <img src={peopleIcon} alt="" />
              <p>{experience?.usersCountStr}</p>
            </div>
          </div>
        </div>
        <div className="custom-tabs">
          {tabs.map((tab) => (
            <div
              className={`tab-item cursor ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClickCapture={() => setActiveTab(tab.id)}
              key={tab.id}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            <div className="overview-section">
              <div
                className="d-flex detail-header cursor"
                onClickCapture={() => setVisibleOverView(!visibleOverView)}
              >
                <h6>Overview</h6>
                <img
                  src={arrowDownIcon}
                  alt=""
                  className={
                    !visibleOverView ? "detail-hidden" : "detail-visible"
                  }
                />
              </div>
              {visibleOverView && (
                <>
                  <div className="description">{experience?.overview}</div>
                  <a
                    href="https://docusignn.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={globeIcon} alt="" />
                    <span>https://docusignn.io</span>
                  </a>
                </>
              )}
            </div>
          )}

          {activeTab === 2 && (
            <div className="activity-list">
              <div className="activity-found">
                {activities.length} activity found
              </div>
              {activities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ExperienceDetailPage;
