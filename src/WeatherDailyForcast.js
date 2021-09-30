import React, { useEffect, useState } from "react";
import axios from "axios";
import ForcastDay from "./ForcastDay";
import "./WeatherDailyForcast.css";

const WeatherDailyForcast = (props) => {
  const [loader, setLoader] = useState(false);
  const [dailyForcastData, setDailyForcastData] = useState(null);

  useEffect(() => {
    (async () => {
      await callApi();
      setLoader(false);
    })();
  }, [props.coordinates.lat, props.coordinates.lon]);

  const showDailyForcast = (response) => {
    console.log("showDailyForcast", response.data.hourly);
    setDailyForcastData(response.data.daily);
    setLoader(true);
  };

  function callApi() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showDailyForcast);
    console.log("daily", apiUrl);
  }

  if (loader) {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            {dailyForcastData.map(function (dailyforcast, index) {
              if (index < 4 && index > 0) {
                return (
                  <div
                    className="col-4 box-weather my-auto text-center"
                    key={index}
                  >
                    <ForcastDay data={dailyforcast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {dailyForcastData.map(function (dailyforcast, index) {
              if (index < 7 && index > 3) {
                return (
                  <div
                    className="col-4 box-weather my-auto text-center"
                    key={index}
                  >
                    <ForcastDay data={dailyforcast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    callApi();
    return null;
  }
};

export default WeatherDailyForcast;
