import React from "react";
import TodoList from "../../components/TodoList";
import Pagination from "../../components/Pagination";

import "./styles.scss";

const MainContent = (props) => {
  return (
    <div className="main-container">
      <TodoList />
      <Pagination />
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;
