import React from "react";
import PropTypes from "prop-types";

CreateBtn.propTypes = {};

function CreateBtn(props) {
  return (
    <>
      <div>
        <button type="button" class="btn btn_createBtn">
          Create New Task
        </button>
      </div>
    </>
  );
}

export default CreateBtn;
