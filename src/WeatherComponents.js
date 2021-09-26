import React from "react";
import HumidityAndWind from "./HumidityAndWind";
import CurrentStatusIcon from "./CurrentStatusIcon";
import CurrentStatusName from "./CurrentStatusName";
import ShowCurrentDay from "./ShowCurrentDay";
import CurrentDegree from "./CurrentDegree";

export default function WeatherComponents(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto mt-2">
            <div className="row">
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
                  <CurrentStatusIcon data={props.data.description} />
                </div>
                <div className="row">
                  <CurrentStatusName data={props.data.description} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 my-auto mt-2">
            <div className="row">
              <div className="col-8 my-auto text-center">
                <div className="row">
                  <ShowCurrentDay />
                </div>
              </div>
              <div className="col-4 my-auto text-center">
                <CurrentDegree data={props.data.temprature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
