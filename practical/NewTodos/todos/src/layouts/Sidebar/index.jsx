import React from "react";
import "./styles.scss";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <p>
          <a href="#">All Task</a>
        </p>
      </div>
      <div className="sidebar__item">
        <p>
          <a href="#">New Task</a>
        </p>
      </div>
      <div className="sidebar__item">
        <p>
          <a href="#">Doing Task</a>
        </p>
      </div>
      <div className="sidebar__item">
        <p>
          <a href="#">Done Task</a>
        </p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
