import React, { useState } from "react";

import { Status } from "../Datas/Contain";

import "./styles.scss";

const TodoItem = (props) => {
  const { title, author, description } = props;
  // const {idx, onHandleChange } = props;
  const [status, setStatus] = useState(Status.NEW);
  const [textColor, setTextColor] = useState("var(--new)");

  const handleChangeStatus = () => {
    if (status === Status.NEW) {
      setStatus(Status.DOING);
      setTextColor(" var(--orange) ");
    } else if (status === Status.DOING) {
      setStatus(Status.DONE);
      setTextColor("var( --primary)");
    } else {
      setStatus(Status.NEW);
      setTextColor(" var(--new)");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card__container">
          <p className="card__title">
            <label>Title: {title}</label>
          </p>
          <p className="card__creator">
            <label>Creator: {author}</label>
          </p>
          <p className="card__status" key={status} style={{ color: textColor }}>
            <label>Status:{status} </label>
          </p>
          <hr className="card__lineBreak" />
          <p className="card__description">Description: {description}</p>
        </div>
        <div>
          <button onClick={() => handleChangeStatus()} value={status}>
            {status}
          </button>
        </div>
      </div>
    </>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
