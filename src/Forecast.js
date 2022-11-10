import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [forecast2, setForecast2] = useState();
  const [temp, setTemp] = useState(false);

  if (props.forecast) {
    let newApi = `ca0db41e2e878c74a1dfc7ffece370d4`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.forecast.lat}&lon=${props.forecast.lon}&appid=${newApi}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }
  function displayForecast(response) {
    setTemp(true);
    setForecast2(response.data.daily);
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  if (temp) {
    return (
      <div className="forecast-list">
        {
          // eslint-disable-next-line
          forecast2.map(function (value, index) {
            let icon = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
            let tempMax = Math.round(value.temp.max);
            let tempMin = Math.round(value.temp.min);
            let date = formatDay(value.dt);
            if (index < 6) {
              return (
                <div className="row p-0">
                  <div className="col-4 p-1 fw-bold" key={index}>
                    {date}
                  </div>
                  <div className="col-2 p-0" key={index}>
                    <img className="img-forecast" src={icon} alt={icon} />{" "}
                  </div>
                  <div className="col-6 p-2 fw-bold font-temp" key={index}>
                    {tempMax}°| {tempMin}°
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}
