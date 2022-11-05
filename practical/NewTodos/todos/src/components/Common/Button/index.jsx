import React from "react";

import "./styles.scss";

const Button = ({ btn, onClickButton }) => {
  const handleClickBtnCreateNewTask = () => {
    onClickButton();
  };
  return (
    <>
      <button className="btn" onClick={handleClickBtnCreateNewTask}>
        {btn}
      </button>
    </>
  );
};

Button.propTypes = {};

export default Button;
