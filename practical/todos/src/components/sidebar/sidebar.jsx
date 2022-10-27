import React from "react";
import PropTypes from "prop-types";

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__item">
          <p>All Task</p>
        </div>
        <div className="sidebar__item">
          <p>New Task</p>
        </div>
        <div className="sidebar__item">
          <p>Doing Task</p>
        </div>
        <div className="sidebar__item">
          <p>Done Tasks</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
