import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import ExperienceItem from "../components/ExperienceItem";
import CategoryItem from "../components/CategoryItem";
import CheckboxItem from "../components/CheckboxItem";

import { popularCategories, experiences } from "../constants";

import searchIcon from "../assets/images/svg/search.svg";
import filterIcon from "../assets/images/svg/filter.svg";

import seeArrowIcon from "../assets/images/svg/arrow_right_2.svg";

import closeIcon from "../assets/images/svg/close.svg";

const ExperiencePage = () => {
  const [searchKey, setSearchKey] = useState('');
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
    <Layout>
      <div className="experience-page">
        <div className="page-header d-flex">
          <div className="search-field">
            <input type="text" placeholder="Search experiences" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
            <img src={searchIcon} alt="" />
          </div>
          <img src={filterIcon} alt="" className="filter-icon cursor" onClickCapture={() => setVisibleFilterModal(true)} />
        </div>
        <div className="page-content">
          {searchKey !== '' ? (
            experiences
            .filter((experience) => experience.title.toLocaleLowerCase()
            .includes(searchKey.toLocaleLowerCase()))
            .map((experience) => (
              <ExperienceItem experience={experience} key={experience.id}/>
            ))
          ) : (
            <>
              <div className="recent-experiences">
                <h6 className="section-title">Recent Experiences</h6>
                {experiences.filter((exp) => exp.type === 'recent').map((experience) => (
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
                {experiences.filter((exp) => exp.type === 'trending').map((experience) => (
                  <ExperienceItem experience={experience} key={experience.id}/>
                ))}
              </div>
            </>
          )}
        </div>    

        {visibleFilterModal && (
          <div className="modal-overlay">
            <div className="category-filter">
              <div className="modal-header d-flex">
                <div className="d-flex">
                  <span>Filter </span>
                  <div className="filter-count">{selectedCateories.length}</div>
                </div>
                <img src={closeIcon} alt="" onClickCapture={() => setVisibleFilterModal(false)} className="cursor" />
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
    </Layout>    
  );
};

export default ExperiencePage;
