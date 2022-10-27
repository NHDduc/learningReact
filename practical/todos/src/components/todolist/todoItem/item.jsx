import React from "react";
import PropTypes from "prop-types";

import "./item.css";

Item.propTypes = {};

function Item(props) {
  return (
    <>
      <div className="item">
        <p className="item__title">Title: task</p>
        <p className="item__creator">Dức</p>
        <p className="item__status">Status: New</p>
        <p className="item__line">
          &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;
        </p>
        <p className="item__description">Description: This is a task</p>
        <select className="item__select">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </>
  );
}

export default Item;
