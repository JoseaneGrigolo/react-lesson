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
  const [forecast, setForecast] = useState();

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
      alert: response.data.weather[0].main,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setForecast(response.data.coord);
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
        <div
          className="alert alert-primary alert-dismissible fade show fixed-top mt-3 p-2 fw-semibold"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="currentColor"
            class="bi bi-exclamation-triangle"
            viewBox="1 1 16 16"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
          </svg>
          <span className="text-primary alert-for"> {info.alert}</span>
          <button
            type="button"
            className="btn-close p-3"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        {form}
        <div class="row p-2 prevision">
          <div className="col-6 p-1">
            <TodayPrevision info={info} />
          </div>
          <div class="col-6 border-bottom border-top border-2 border-secondary p-3">
            <Forecast forecast={forecast} />
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
                  wrapperClassName=""
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
