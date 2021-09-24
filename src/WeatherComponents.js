import React from "react";

import Search from "./Search";
import ShowCurrentLocation from "./ShowCurrentLocation";
import Humidity from "./Humidity";
import Wind from "./Wind";
import CurrentStatusIcon from "./CurrentStatusIcon";
import CurrentStatusName from "./CurrentStatusName";
import ShowCurrentDay from "./ShowCurrentDay";
import ShowCurrentDate from "./ShowCurrentDate";
import ShowCurrentHour from "./ShowCurrentHour";
import CurrentDegree from "./CurrentDegree";

export default function WeatherComponents(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Search />
          </div>
          <div className="col-md-3 my-auto text-center">
            <ShowCurrentLocation
              data1={props.data.city}
              data2={props.data.country}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 my-auto mt-2">
            <div className="row">
              <div className="col-6 my-auto text-center">
                <div className="row">
                  <Humidity data={props.data.humidity} />
                </div>
                <div className="row">
                  <Wind data={props.data.wind} />
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
              <div className="col-6 my-auto text-center">
                <div className="row">
                  <ShowCurrentDay />
                </div>
                <div className="row">
                  <ShowCurrentDate />
                </div>
                <div className="row">
                  <ShowCurrentHour />
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
