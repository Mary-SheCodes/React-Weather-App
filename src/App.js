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
import Footer from "./Footer";

import "./App.css";
import Api from "./Api";

export default function APP() {
  return (
    <div>
      <div className="main-box">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Search />
            </div>
            <div className="col-md-3 my-auto text-center">
              <ShowCurrentLocation />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 my-auto mt-2">
              <div className="row">
                <div className="col-6 my-auto text-center">
                  <div className="row">
                    <Humidity />
                  </div>
                  <div className="row">
                    <Wind />
                  </div>
                </div>
                <div className="col-6 my-auto text-center">
                  <div className="row">
                    <CurrentStatusIcon />
                  </div>
                  <div className="row">
                    <CurrentStatusName />
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
                  <CurrentDegree />
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
}
