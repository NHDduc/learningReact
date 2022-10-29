import React from "react";
import Button from "../../components/Common/Button";
import SearchForm from "../../components/SearchForm";

import "./styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Button btn="Create  New Task" />
      <SearchForm />
    </header>
  );
};

Header.propTypes = {};

export default Header;
