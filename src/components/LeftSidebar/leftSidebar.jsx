import React from "react";
import "./leftSideBar.css";
import { NavLink } from "react-router-dom";
import { forumData } from "../../data";

const LeftSideBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive && "bold",
  });

  const {username, name, picUrl} = forumData;

  return (
    <div className="left-sidebar">
      <div>
        <NavLink to="/" className="left-sidebar-items" style={getActiveStyle}>
          <i class="fa-solid fa-house"></i> <span>Home</span>
        </NavLink>
        <NavLink className="left-sidebar-items">
          <i class="fa-solid fa-compass"></i> <span>Explore</span>
        </NavLink>
        <NavLink className="left-sidebar-items">
          <i class="fa-solid fa-bookmark"></i> <span>Bookmarks</span>
        </NavLink>
        <NavLink className="left-sidebar-items">
          <i class="fa-solid fa-user"></i> <span>Profile</span>
        </NavLink>
      </div>
      <div className="profile-avatar">
        <img src={picUrl} alt="profile" />
        <div>
            <strong>{name}</strong>
            <small>@{username}</small>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
