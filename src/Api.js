import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import ShowCurrentLocation from "./ShowCurrentLocation";
import HumidityAndWind from "./HumidityAndWind";
import CurrentStatus from "./CurrentStatus";
import ShowCurrentDay from "./ShowCurrentDay";
import CurrentDegree from "./CurrentDegree";
import Footer from "./Footer";
import "./Api.css";

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

  const updateLocation = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let latandlon = `lat=${latitude}&lon=${longitude}`;
    let apiKey = "23422500afd990f6bd64b60f46cf509a";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${latandlon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(getWeatherData);
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
        <div className="main-box">
          <div className="container">
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
                  updateLocation={(event) => {
                    updateLocation(event);
                  }}
                />
              </div>
              <div className="col-md-3 my-auto text-center">
                <ShowCurrentLocation
                  data1={weatherdata.city}
                  data2={weatherdata.country}
                />
              </div>
            </div>
            <div className="row my-auto">
              <div className="col-md-7 my-auto">
                <div className="row ">
                  <div className="col-6 my-auto text-start">
                    <div>
                      <HumidityAndWind
                        data1={weatherdata.humidity}
                        data2={weatherdata.wind}
                      />
                    </div>
                  </div>
                  <div className="col-6 my-auto text-center">
                    <div>
                      <ShowCurrentDay />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 my-auto">
                <div className="row">
                  <div className="col-6 my-auto text-center">
                    <div>
                      <CurrentStatus data={weatherdata.description} />
                    </div>
                  </div>
                  <div className="col-6 my-auto text-center">
                    <CurrentDegree data={weatherdata.temprature} />
                  </div>
                </div>
              </div>
            </div>

            <div className="title">Next Hours</div>
            <div className="row"></div>
            <div className="title">Next Days</div>
            <div className="row"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return "Loader";
  }
};
export default Api;
