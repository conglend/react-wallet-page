import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import ExperienceItem from "../components/ExperienceItem";
import CategoryItem from "../components/CategoryItem";
import FiltersModal from "../components/FiltersModal";

import { popularCategories, experiences } from "../constants";

import searchIcon from "../assets/images/svg/search.svg";
import filterIcon from "../assets/images/svg/filter.svg";
import seeArrowIcon from "../assets/images/svg/arrow_right_2.svg";

const ExperiencePage = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [visibleFilterModal, setVisibleFilterModal] = useState(false);

  useEffect(() => {
    setSearchResults(
      searchKey
        ? experiences.filter((experience) => {
            const title = experience.title.toLocaleLowerCase();
            return title.includes(searchKey.toLocaleLowerCase());
          })
        : experiences
    );
  }, [searchKey]);

  return (
    <Layout>
      <div className="experience-page">
        <div className="page-header d-flex">
          <div className="search-field">
            <input
              type="text"
              placeholder="Search experiences"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <img src={searchIcon} alt="" />
          </div>
          <img
            src={filterIcon}
            alt=""
            className="filter-icon cursor"
            onClickCapture={() => setVisibleFilterModal(true)}
          />
        </div>
        <div className="page-content">
          {searchKey !== "" ? (
            <div className="recent-experiences">
              <h6 className="section-title search-count">
                {searchResults.length} experiences found
              </h6>
              {searchResults.map((experience) => (
                <ExperienceItem experience={experience} key={experience.id} />
              ))}
            </div>
          ) : (
            <>
              <div className="recent-experiences">
                <h6 className="section-title">Recent Experiences</h6>
                {experiences
                  .filter((exp) => exp.type === "recent")
                  .map((experience) => (
                    <ExperienceItem
                      experience={experience}
                      key={experience.id}
                    />
                  ))}
              </div>
              <div className="popular-categories">
                <div className="section-header d-flex">
                  <h6 className="section-title no-margin">
                    Popular Categories
                  </h6>
                  <Link to="/">
                    <span>See All</span> <img src={seeArrowIcon} alt="" />
                  </Link>
                </div>
                <div className="popular-categories-list">
                  {popularCategories.map((category) => (
                    <CategoryItem category={category} key={category.id} />
                  ))}
                </div>
              </div>
              <div className="popular-experiences">
                <h6 className="section-title">Popular Experiences</h6>
                {experiences
                  .filter((exp) => exp.type === "trending")
                  .map((experience) => (
                    <ExperienceItem
                      experience={experience}
                      key={experience.id}
                    />
                  ))}
              </div>
            </>
          )}
        </div>

        {visibleFilterModal && (
          <FiltersModal
            popularCategories={popularCategories}
            visibleFilterModal={visibleFilterModal}
            setVisibleFilterModal={setVisibleFilterModal}
          />
        )}
      </div>
    </Layout>
  );
};

export default ExperiencePage;
