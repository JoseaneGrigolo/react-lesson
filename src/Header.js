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

        <div className="col-6 p-0"></div>
        <div className="col-3 p-1">
          <div className="time text-secondary m-1 pt-3 fw-bold">00:00</div>
        </div>
      </div>
    </div>
  );
}
