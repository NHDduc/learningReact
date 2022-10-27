import React from "react";
import PropTypes from "prop-types";

SearchForm.propTypes = {};

function SearchForm(props) {
  return (
    <>
      <nav class="navbar">
        <form class="form-inline">
          <input
            class="form"
            type="search"
            placeholder="Type something to search"
          />
          <button class="btn" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default SearchForm;
