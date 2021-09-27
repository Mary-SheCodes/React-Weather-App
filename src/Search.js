import React from "react";
import "./Search.css";

const Search = function (props) {
  const handleChange = (event) => {
    props.onchange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onsubmit(event.target.value);
  };

  const navigation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getLocation);
  };

  const getLocation = (position) => {
    props.updateLocation(position);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
          <button
            className="btn btn-outline-secondary me-1"
            type="button"
            onClick={navigation}
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
};
export default Search;
