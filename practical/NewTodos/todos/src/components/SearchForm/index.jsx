import React from "react";
import InputText from "../Common/InputText";
import Button from "../Common/Button";

const SearchForm = (props) => {
  const onClickBtn = () => {
    alert("Đây là btn search");
  };
  return (
    <div>
      <InputText />
      <Button name="Search" onClickButton={onClickBtn} />
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
