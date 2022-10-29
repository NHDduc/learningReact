import React from "react";

import TodoItem from "../TodoItem";

import "./styles.scss";

const INITIAL_DATA = [
  {
    title: "Task 1",
    name: "Lâm",
    status: '',
  },
  {
    title: "Task 2",
    name: "Minh",
    status: '',
  },
  {
    title: "Task 3",
    name: "Huân",
    status: '',
  },
  {
    title: "Task 4",
    name: "Đức",
    status: '',
  },
  {
    title: "Task 5",
    name: "Nhân",
    status: '',
  },
  {
    title: "Task 6",
    name: "Hoàng",
    status: '',
  },
  {
    title: "Task 7",
    name: "Thành",
    status:'',
  },
  {
    title: "Task 8",
    name: "Ngân",
    status:'',
  },
  {
    title: "Task 9",
    name: "Hậu",
    status: '',
  },
  {
    title: "Task 10",
    name: "Giang",
    status: '',
  },
];

const TodoList = (props) => {
  return (
    <div className="todos">
      {INITIAL_DATA.map((item, index) => (
        <TodoItem key={index} titles={item.title} name={item.name} status={item.status} />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
