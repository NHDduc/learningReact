import React, { useState } from "react";

import InputText from "../Common/InputText";
import Button from "../Common/Button";
import { Status } from "../Datas/Contain";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

Form.propTypes = {};

const Form = (props) => {
  const data = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  // set object formValue gom các element chuoi: '';
  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: "",
    author: "",
    description: "",
    status: Status.NEW,
  });
  // add envent onchange  value of input
  const onChangeText = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // if (isEmpty(title)) {
    //   alert("You need to enter all the information");
    // }
  };
  const validateForm = () => {};
  // add event ónubmit submit form localStrore and next page
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form
    validateForm();
    data.push(formValue);
    localStorage.setItem("todos", JSON.stringify(data));
    // alert("Add new success")
    // next page
    let path = "/";
    navigate(path);
  };

  // const isEmpty= (c) => {
  //   return c == null || c == undefined  || c == '';
  //   }
  // };

  return (
    <form className="addTaskForm" onSubmit={handleSubmit}>
      <div className="row-item">
        <label for="title">Title</label>
        <div className="input-area">
          <InputText
            type="text"
            placeholder="Place holder"
            name="title"
            value={formValue.title}
            onChange={onChangeText}
          />
        </div>
      </div>
      <div className="row-item">
        <label for="author">Creator</label>
        <div className="input-area">
          <InputText
            type="text"
            placeholder="Name of Creator"
            name="author"
            value={formValue.author}
            onChange={onChangeText}
          />
        </div>
      </div>
      <div className="row-item">
        <label for="description">Description</label>
        <div className="input-area">
          <InputText
            type="text"
            placeholder="Description Details"
            name="description"
            value={formValue.description}
            onChange={onChangeText}
          />
        </div>
      </div>
      <div className="btn">
        <Button type="submit" value={"Save"} btn="save" />
      </div>
    </form>
  );
};

export default Form;
