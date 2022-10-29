import React from "react";

import "./styles.scss";

const Button = (props) => {
  const { btn } = props;

  return <button className="btn">{btn}</button>;
};

Button.propTypes = {};

export default Button;
