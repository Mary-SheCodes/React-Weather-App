import React, { useState } from "react";
import "./Search.css";

const Search = function (props) {
  const handleChange = (event) => {
    props.onchange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onsubmit(event.target.value);
  };

  return (
    <form id="search-form" className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="search"
          className="form-control me-1"
          placeholder="Enter City Name"
          aria-label="City Name"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary me-1" type="submit">
            Search
          </button>
          <button className="btn btn-outline-secondary me-1" type="button">
            Current
          </button>
        </div>
      </div>
    </form>
  );
};
export default Search;
