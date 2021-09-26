import React from "react";
import HumidityAndWind from "./HumidityAndWind";
import CurrentStatus from "./CurrentStatus";
import ShowCurrentDay from "./ShowCurrentDay";
import CurrentDegree from "./CurrentDegree";

export default function WeatherComponents(props) {
  return (
    <div>
      <div className="container">
        <div className="row my-auto">
          <div className="col-md-7 my-auto">
            <div className="row ">
              <div className="col-6 my-auto text-start">
                <div className="row">
                  <HumidityAndWind
                    data1={props.data.humidity}
                    data2={props.data.wind}
                  />
                </div>
              </div>
              <div className="col-6 my-auto text-center">
                <div className="row">
                  <ShowCurrentDay />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 my-auto">
            <div className="row">
              <div className="col-6 my-auto text-center">
                <div className="row">
                  <CurrentStatus data={props.data.description} />
                </div>
              </div>
              <div className="col-6 my-auto text-center">
                <CurrentDegree data={props.data.temprature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
