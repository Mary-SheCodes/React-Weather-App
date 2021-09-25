import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import WeatherComponents from "./WeatherComponents";
import Search from "./Search";

const Api = function (props) {
  const [city, setCity] = useState("Tehran");
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [weatherdata, setWeatherdata] = useState("");

  const onchange = (data) => {
    setValue(data);
    console.log("Khorooji onchange", data);
  };

  const onSubmit = (data) => {
    setCity(data);
    console.log("Khorooji Submit", data);
  };

  useEffect(function () {
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    return axios.get(apiUrl).then(getApi);
  }, []);

  function getApi(response) {
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
              data={city}
              onSubmit={(event) => {
                onSubmit(event);
              }}
              data={value}
              onchange={(event) => {
                onchange(event);
              }}
            />
          </div>
          <div className="col-md-3 my-auto text-center"></div>
          <WeatherComponents data={weatherdata} />
        </div>
      </div>
    );
  } else {
    return "Loader";
  }
};
export default Api;
