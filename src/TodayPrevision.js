import React from "react";
import RatingApp from "./RatingApp";

import "./todayPrevision.css";

export default function TodayPrevision(props) {
  return (
    <div className="TodayPrevision">
      <h1 className="text-secondary font" id="current-city">
        {props.info.city}
      </h1>

      <div className="row p-0">
        <div className="col-1"></div>
        <div className="col-3 text-primary fw-bold p-0 m-0">
          <p className="pt-2 m-0 font" id="today">
            {props.info.date}
          </p>
          <img
            className="p-0 m-0 img-prevision"
            src={props.info.icon}
            alt={props.info.icon}
          />
        </div>
        <div className="col-3 text-secondary">
          <output type="text" className="today-celsius">
            {props.info.temperature}
          </output>
        </div>
        <div className="col-4">
          <button className="celsius fw-bold mt-3 active">°C</button>
        </div>
        <div className="col-1"></div>
      </div>

      <h5 className="text-primary fw-bold font" id="description">
        {props.info.description}
      </h5>
      <p className="p-0 m-0 text-secondary font">
        Humidity: <span id="humidity">{props.info.humidity}</span>%
      </p>
      <p className="p-0 m-0 text-secondary font">
        Wind: <span id="wind">{props.info.wind}</span>km/h
      </p>
      <RatingApp />
    </div>
  );
}
