import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherComponents from "./WeatherComponents";
import Search from "./Search";
import ShowCurrentLocation from "./ShowCurrentLocation";

const Api = function (props) {
  let [searchcity, setSearchcity] = useState("Tehran");
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [weatherdata, setWeatherdata] = useState("");

  const onchange = (data) => {
    setValue(data);
  };

  const onsubmit = () => {
    setSearchcity(value);
    searchcity = value;
    callApi();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callApi, []);

  function callApi() {
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=${apiKey}&units=${units}`;
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
              data1={searchcity}
              onsubmit={(event) => {
                onsubmit(event);
              }}
              data2={value}
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
