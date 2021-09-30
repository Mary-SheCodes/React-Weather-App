import React, { useEffect, useState } from "react";
import axios from "axios";
import ForcastHour from "./ForcastHour";
import "./WeatherHourlyForcast.css";

const WeatherHourlyForcast = (props) => {
  const [loader, setLoader] = useState(false);
  const [hourlyForcastData, setHourlylyForcastData] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    (async () => {
      await callApi();
      setLoader(false);
    })();
  }, [props.coordinates.lat, props.coordinates.lon]);

  const showHourlyForcast = (response) => {
    console.log("showHourlyForcast", response.data.hourly);
    setHourlylyForcastData(response.data.hourly);
    setLoader(true);
  };

  function callApi() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = "23422500afd990f6bd64b60f46cf509a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showHourlyForcast);
    console.log("hourly", apiUrl);
  }

  if (loader) {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            {hourlyForcastData.map(function (hourlyforcast, index) {
              if (index < 4 && index > 0) {
                return (
                  <div
                    className="col-4 box-weather my-auto text-center"
                    key={index}
                  >
                    <ForcastHour data={hourlyforcast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {hourlyForcastData.map(function (hourlyforcast, index) {
              if (index < 7 && index > 3) {
                return (
                  <div
                    className="col-4 box-weather my-auto text-center"
                    key={index}
                  >
                    <ForcastHour data={hourlyforcast} />
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

export default WeatherHourlyForcast;
