import React from "react";
import "./ForcastHour.css";

const ForcastHour = (props) => {
  const temprature = (response) => {
    const temprature = Math.round(props.data.temp);
    return `${temprature}°`;
  };

  const hour = () => {
    const date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`;
  };

  let imageName = props.data.weather[0].description;
  imageName = imageName.replaceAll(" ", "_");
  let imgUrl = `/weathericons/${imageName}.png`;

  return (
    <div>
      <div className="hour">{hour()}</div>
      <div className="high-degree">{temprature()}</div>
      <div>
        <img className="weathericone img-fluid" src={imgUrl} alt={imageName} />
      </div>
      <div className="humidity-status">{props.data.humidity}%</div>
    </div>
  );
};
export default ForcastHour;
