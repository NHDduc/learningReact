import React, { useState } from "react";

import TodoItem from "../TodoItem";

import "./styles.scss";

const data = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
// gán todoList về arr of data localstore
const [todoList, setTodoList] = useState(data);

const handleChange = (idx, newStatus) => {
  // New todoList frome current one
  const newTodoList = [...todoList];
  // Update status for item by index
  newTodoList[idx] = {
    ...todoList[idx],
    status: newStatus,
  };
  setTodoList(newTodoList);
};

const TodoList = (props) => {
  return (
    <div className="todos">
      {todoList.map((data, index) => (
        <TodoItem
          key={index}
          titles={data.title}
          name={data.name}
          status={data.status}
          description={data.description}
          onHandChange={handleChange}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
