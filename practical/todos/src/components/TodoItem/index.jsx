import React from "react";

import "./styles.scss";

const LIST_STATUS = {
  NEW: "New",
  DOING: "Doing",
  DONE: "Done",
};
const INITIAL_DATA = [
  {
    title: "Task 1",
    name: "Nhật",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 2",
    name: "Quân",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 3",
    name: "Mỹ",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 4",
    name: "Khang",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 5",
    name: "Thảo",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 6",
    name: "Trang",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 7",
    name: "Ngọc",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 8",
    name: "Minh",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 9",
    name: "Lộc",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 10",
    name: "Tường",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 11",
    name: "Long",
    status: LIST_STATUS.NEW,
  },
  {
    title: "Task 12",
    name: "An",
    status: LIST_STATUS.NEW,
  },
];

const TodoItem = () => {
  const [data, setData] = useState(INITIAL_DATA);
  let change = (event, index) => {
    const newData = [...data];
    const item = newData[index];
    const value = event.target.value;
    item.status = value;
    setData(newData);
  };

  return data.map((item, index) => (
    <div className="card" key={index.toString()}>
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>{item.title}</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>{item.name}</label>
        </p>
        <p className="card__status">
          <label id="status">Status: </label>
          <label>{item.status}</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: This is a task</p>
      </div>
      <div>
        <select
          className="card__select"
          onChange={(event) => change(event, index)}
        >
          {Object.values(LIST_STATUS).map((status, i) => (
            <option key={i} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  ));
};

TodoItem.propTypes = {};

export default TodoItem;
