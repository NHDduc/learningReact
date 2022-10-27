import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

Card.propTypes = {
  fullName: PropTypes.string,
  age: PropTypes.number,
};

function Card(prop) {
  const { fullName, age } = prop;

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">age: {age}</p>
          <p className="card-text">description about {fullName}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
