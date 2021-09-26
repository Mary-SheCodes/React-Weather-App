import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import WeatherComponents from "./WeatherComponents";
import Search from "./Search";
import ShowCurrentLocation from "./ShowCurrentLocation";

const Api = function (props) {
  let [searchCity, setSearchCity] = useState("Tehran");
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [weatherdata, setWeatherdata] = useState("");

  const onchange = (data) => {
    setValue(data);
  };

  const onsubmit = () => {
    setSearchCity(value);
    city = value;
    callApi();
  };

  useEffect(callApi, []);

  function callApi() {
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    return axios.get(apiUrl).then(getWeatherData);
  }

  function getWeatherData(response) {
    setWeatherdata({
      temprature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
    });
    setLoader(true);
  }

  if (loader) {
    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <Search
              data={searchCity}
              onsubmit={(event) => {
                onsubmit(event);
              }}
              data={value}
              onchange={(event) => {
                onchange(event);
              }}
            />
          </div>
          <div className="col-md-3 my-auto text-center">
            <ShowCurrentLocation
              data1={weatherdata.city}
              data2={weatherdata.country}
            />
          </div>
          <WeatherComponents data={weatherdata} />
        </div>
      </div>
    );
  } else {
    return "Loader";
  }
};
export default Api;
