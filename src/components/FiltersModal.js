import React, { useState } from "react";
import closeIcon from "../assets/images/svg/close.svg";
import CheckboxItem from "./CheckboxItem";

const FiltersModal = ({ visibleFilterModal, popularCategories, setVisibleFilterModal }) => {
  const [selectedCateories, setSelectedCategories] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  const handleCategorySelect = (catID) => {
    if (selectedCateories.includes(catID)) {
      setSelectedCategories(selectedCateories.filter((id) => id !== catID));
    } else {
      setSelectedCategories([...selectedCateories, catID]);
    }
  };

  const toggleSelectAll = () => {
    if (!checkedAll) {
      setCheckedAll(true);
      setSelectedCategories(popularCategories.map((item) => item.id));
    } else {
      setCheckedAll(false);
      setSelectedCategories([]);
    }
  };

  return (
    <div className={`modal-overlay ${visibleFilterModal ? 'visible' : 'hidden'}`}>
      <div className="category-filter">
        <div className="modal-header d-flex">
          <div className="d-flex">
            <span>Filter </span>
            <div className="filter-count">{selectedCateories.length}</div>
          </div>
          <img
            src={closeIcon}
            alt=""
            onClickCapture={() => setVisibleFilterModal(false)}
            className="cursor"
          />
        </div>
        <div className="checkbox-list">
          <div className="checkbox-item d-flex">
            <div className="d-flex">
              <input
                className="custom-checkbox"
                id="category-select-all"
                type="checkbox"
                checked={checkedAll}
                onChange={() => toggleSelectAll()}
              />
              <label
                id="category-select-all"
                onClickCapture={() => toggleSelectAll()}
              ></label>
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
  );
};

export default FiltersModal;
