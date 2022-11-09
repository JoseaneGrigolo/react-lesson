import React from "react";
import logo from "./logo.png";

import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row border-bottom border-2 border-secondary">
        <div className="col-3 p-0">
          <a href="index.js">
            <img src={logo} className="logo m-1" alt="logo weather" />
          </a>
        </div>

        <div className="col-6 p-0">
          <div
            className="alert alert-primary alert-dismissible fade show mt-3 p-2 fw-semibold"
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
            <span className="text-primary alert-for">
              <span id="weather-main"> CLEAR </span>
              WEATHER
            </span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="col-3 p-1">
          <div className="time text-secondary m-1 pt-3 fw-bold">00:00</div>
        </div>
      </div>
    </div>
  );
}
