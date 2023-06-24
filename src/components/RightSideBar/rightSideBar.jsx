import React, { useState } from "react";
import "./rightSideBar.css";
import { sortOptions, getSortedPosts } from "../../utils/sortPosts";
const RightSideBar = () => {
  const [sortByOption, setSortByOption] = useState("Latest");
  return (
    <div className="right-sidebar">
      <div className="sort-post">
        <h3>{sortOptions[sortByOption]}</h3>
        <select onChange={(e) => setSortByOption(e.target.value)}>
          {Object.keys(sortOptions).map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RightSideBar;
