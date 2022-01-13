import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/images/svg/search.svg";
import filterIcon from "../assets/images/svg/filter.svg";

import recentExpIcon1 from "../assets/images/svg/recent-exp2.svg";
import recentExpIcon2 from "../assets/images/svg/recent-exp1.svg";

import seeArrowIcon from "../assets/images/svg/arrow_right_2.svg";

import cateIcon1 from "../assets/images/svg/cate1.svg";
import cateIcon2 from "../assets/images/svg/cate2.svg";
import cateIcon3 from "../assets/images/svg/cate3.svg";
import cateIcon4 from "../assets/images/svg/cate4.svg";
import cateIcon5 from "../assets/images/svg/cate5.svg";
import cateIcon6 from "../assets/images/svg/cate6.svg";

import closeIcon from "../assets/images/svg/close.svg";

import ExperienceItem from "../components/ExperienceItem";
import CategoryItem from "../components/CategoryItem";
import CheckboxItem from "../components/CheckboxItem";

const recentExperiences = [
  {
    id: 1,
    title: 'DeFi Swap',
    description: 'Swap your digital assets',
    memberNumbers: '+200 users',
    icon: recentExpIcon1
  },
  {
    id: 2,
    title: 'Docu sign',
    description: 'sign smart contracts seamlessly',
    memberNumbers: '+1K users',
    icon: recentExpIcon2
  }
];

const popularCategories = [
  { id: 1, color: '#EAEFFF', icon: cateIcon1, text: 'Exchanges' },
  { id: 2, color: '#F5F5F5', icon: cateIcon2, text: 'Games' },
  { id: 3, color: '#E2F9F3', icon: cateIcon3, text: 'Marketplaces' },
  { id: 4, color: '#FFF3EC', icon: cateIcon4, text: 'Defi' },
  { id: 5, color: '#EBF5FF', icon: cateIcon5, text: 'Collectibles' },
  { id: 6, color: '#F0EBFF', icon: cateIcon6, text: 'Utilities' },
];

const ExperiencePage = () => {
  const [visibleFilterModal, setVisibleFilterModal] = useState(false);
  const [selectedCateories, setSelectedCategories] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  const handleCategorySelect = (catID) => {
    if (selectedCateories.includes(catID)) {
      setSelectedCategories(selectedCateories.filter((id) => id !== catID));
    } else {
      setSelectedCategories([...selectedCateories, catID]);
    }
  };

  const handleAllCategories = () => {
    if(!checkedAll) {
      setCheckedAll(true);
      setSelectedCategories(popularCategories.map(item => item.id));
    } else {
      setCheckedAll(false);
      setSelectedCategories([]);
    }
  };
  return (
    <div className="experience-page">
      <div className="page-header d-flex">
        <div className="search-field">
          <input type="text" placeholder="Search experiences" />
          <img src={searchIcon} alt="" />
        </div>
        <img src={filterIcon} alt="" className="filter-icon cursor" onClickCapture={() => setVisibleFilterModal(true)} />
      </div>
      <div className="page-content">
        <div className="recent-experiences">
          <h6 className="section-title">Recent Experiences</h6>
          {recentExperiences.map((experience) => (
            <ExperienceItem experience={experience} key={experience.id}/>
          ))}
        </div>
        <div className="popular-categories">
          <div className="section-header d-flex">
            <h6 className="section-title no-margin">Popular Categories</h6>
            <Link to="/">
              <span>See All</span> <img src={seeArrowIcon} alt="" />
            </Link>
          </div>
          <div className="popular-categories-list">
            {popularCategories.map((category) => (
              <CategoryItem category={category} key={category.id}/>
            ))}
          </div>     
        </div>
        <div className="popular-experiences">
          <h6 className="section-title">Popular Experiences</h6>
          {recentExperiences.map((experience) => (
            <ExperienceItem experience={experience} key={experience.id}/>
          ))}
        </div>
      </div>

      {visibleFilterModal && (
        <div className="modal-overlay">
          <div className="category-filter">
            <div className="modal-header d-flex">
              <div className="d-flex">
                <span>Filter </span>
                <div className="filter-count">{selectedCateories.length}</div>
              </div>
              <img src={closeIcon} alt="" onClickCapture={() => setVisibleFilterModal(false)} />
            </div>
            <div className="checkbox-list">
              <div className="checkbox-item d-flex">
                <div className="d-flex">
                  <input 
                    className="custom-checkbox" 
                    id="category-select-all"
                    type="checkbox" 
                    checked={checkedAll}
                    onChange={() => handleAllCategories()}
                  />
                  <label id="category-select-all" onClickCapture={() => handleAllCategories()}></label>
                </div>
                <span className="all-check">All Experiences</span>
              </div>
              {popularCategories.map((category) => ( 
                <CheckboxItem
                  key={category.id}
                  category={category} 
                  checked={selectedCateories.includes(category.id)} 
                  handleCategorySelect={handleCategorySelect}
                />
              ))}              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
