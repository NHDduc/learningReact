import React from "react";
import Button from "../../components/Common/Button";
import SearchForm from "../../components/SearchForm";

import { useNavigate } from "react-router-dom";

import "./styles.scss";

const Header = (props) => {
  let navigate = useNavigate();
  const onClickBtn = () => {
    // window.location.href='/add-newtask'
    let path = "/add-newtask";
    navigate(path);
  };
  return (
    <header className="header">
      <Button btn="Create New Task" onClickButton={onClickBtn} />
      <SearchForm />
    </header>
  );
};

Header.propTypes = {};

export default Header;
