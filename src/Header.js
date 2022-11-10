import React from "react";
import logo from "./logo.png";

import "./header.css";

export default function Header() {
  let clock = document.querySelector(".clock");

  function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    clock = h + ":" + m;

    setTimeout(startTime, 1000);
  }

  startTime();

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  return (
    <div className="Header">
      <div className="row border-bottom border-2 border-secondary">
        <div className="col-3 p-0">
          <a href="index.js">
            <img src={logo} className="logo m-1" alt="logo weather" />
          </a>
        </div>

        <div className="col-6 p-0"></div>
        <div className="col-3 p-1">
          <div className="time text-secondary m-1 pt-3 fw-bold clock">
            {clock}
          </div>
        </div>
      </div>
    </div>
  );
}
