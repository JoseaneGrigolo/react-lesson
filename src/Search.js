import React, { useState } from "react";
import TodayPrevision from "./TodayPrevision";
import Forecast from "./Forecast";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import "./search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({});
  const [temp, setTemp] = useState(false);
  let apiKey = "52e34c3750a0a87a4e68575b57b95041";
  let units = "metric";

  function showTemperature(response) {
    setTemp(true);
    setInfo({
      city: response.data.name,
      date: "Today",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }
  function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="row">
      <div className="col-8 p-2">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="search"
              className="form-control font"
              onChange={searchCity}
              placeholder="Search for a city"
              aria-label="Search and current location"
              onfocus="this.value='';"
            />
            <button
              type="submit"
              className="btn btn-outline-primary border border-primary border-2"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="col-4 p-2">
        <div className="input-group">
          <button
            type="submit"
            className="btn btn-outline-primary border border-primary border-2 font test"
            onClick={showCurrentLocation}
          >
            <i className="fa-solid fa-location-dot"></i> Current
          </button>
        </div>
      </div>
    </div>
  );

  if (temp) {
    return (
      <div className="Search">
        {form}
        <div class="row p-2 prevision">
          <div className="col-6 p-1">
            <TodayPrevision info={info} />
          </div>
          <div class="col-6 border-bottom border-top border-2 border-secondary p-3">
            <Forecast />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        {form}
        <div class="row p-2 prevision">
          <div className="col-6 p-1">
            <div className="row p-0">
              <div className="col-4"></div>
              <div className="col-4">
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#007bff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName="teste"
                  visible={true}
                />
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          <div class="col-6 border-bottom border-top border-2 border-secondary p-3">
            <Forecast />
          </div>
        </div>
      </div>
    );
  }
}
