import React from "react";
import InputText from "../Common/InputText";
import Button from "../Common/Button";

const SearchForm = (props) => {
  return (
    <div>
      <InputText />
      <Button btn="Search" />
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
