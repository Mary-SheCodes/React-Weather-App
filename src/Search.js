import React, { useCallback } from "react";
import "./Search.css";

const Search = function (props) {
  const handleChange = (event) => {
    props.onchange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onsubmit(event.target.value);
  };

  //const navigation = (event) => {
  //  event.preventDefault();
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // };

  // const showPosition = (position) => {
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longitude;
  //   let latandlon = `lat=${latitude}&lon=${longitude}`;
  //   let apiKey = "23422500afd990f6bd64b60f46cf509a";
  //    let unit = "metric";
  //    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${latandlon}&appid=${apiKey}&units=${unit}
  //`;  };

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
        </div>
      </div>
    </form>
  );
};
export default Search;
