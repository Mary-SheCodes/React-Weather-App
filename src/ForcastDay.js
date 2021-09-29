import React from "react";
import "./ForcastDay.css";

const ForcastDay = (props) => {
  const minTemprature = (response) => {
    const temprature = Math.round(props.data.temp.min);
    return `${temprature}°`;
  };

  const maxTemprature = (response) => {
    const temprature = Math.round(props.data.temp.max);
    return `${temprature}°`;
  };

  const day = () => {
    const date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  };

  let imageName = props.data.weather[0].description;
  imageName = imageName.replaceAll(" ", "_");
  let imgUrl = `/weathericons/${imageName}.png`;

  return (
    <div>
      <div className="day">{day()}</div>
      <div>
        <span className="low-degree">{minTemprature()}</span>
        <span className="high-degree">/{maxTemprature()}</span>
      </div>
      <div>
        <img className="weathericone img-fluid" src={imgUrl} alt={imageName} />
      </div>
      <div className="humidity-status">{props.data.humidity}%</div>
    </div>
  );
};
export default ForcastDay;
