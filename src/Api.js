import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [loader, setLoader] = useState(false);
  const [weatherdata, setWeatherdata] = useState("");

  useEffect(function () {
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let city = "Tehran";
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
        <div>{weatherdata.temprature}</div>
        <div>{weatherdata.humidity}</div>
      </div>
    );
  } else {
    return "Loader";
  }
}
