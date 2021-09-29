import React, { useState } from "react";
import axios from "axios";
import ForcastDay from "./ForcastDay";
import "./WeatherForcast.css";

const WeatherForcast = (props) => {
  const [loader, setLoader] = useState(false);
  const [dailyForcastData, setDailyForcastData] = useState(null);

  const showDailyForcast = (response) => {
    setDailyForcastData(response.data.daily);
    setLoader(true);
  };

  if (loader) {
    return (
      <div className="col-2 box-weather my-auto text-center">
        <ForcastDay data={dailyForcastData[0]} />
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showDailyForcast);
    return null;
  }
};

export default WeatherForcast;
