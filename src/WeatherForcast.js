import React, { useEffect, useState } from "react";
import axios from "axios";
import ForcastDay from "./ForcastDay";
import "./WeatherForcast.css";

const WeatherForcast = (props) => {
  const [loader, setLoader] = useState(false);
  const [dailyForcastData, setDailyForcastData] = useState(null);

  useEffect(() => {
    setLoader(false);
  }, [props.coordinates]);

  const showDailyForcast = (response) => {
    setDailyForcastData(response.data.daily);
    console.log(dailyForcastData);
    setLoader(true);
  };

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
