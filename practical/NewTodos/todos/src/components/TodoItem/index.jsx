import React from "react";

import "./styles.scss";

const TodoItem = (props) => {
  const { titles, name, status } = props;
  // const [statu, setStatus] = useState("");
  // function changeStatus() {}

  return (
    <>
      <div className="card">
        <div className="card__container">
          <p className="card__title">
            <label>Title: {titles}</label>
          </p>
          <p className="card__creator">
            <label>Creator: {name}</label>
          </p>
          <p className="card__status">
            <label id="status">Status: {status}</label>
          </p>
          <hr className="card__lineBreak" />
          <p className="card__description">Description: This is a task</p>
        </div>
        <div>
          <select className="card__select">
            <option value=""></option>
          </select>
        </div>
      </div>
    </>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
