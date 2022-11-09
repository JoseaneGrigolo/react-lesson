import React from "react";

import "./cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="row">
        <div className="col-12 p-1">
          <ul className="list-cities text-start p-1 mb-0 fw-semibold">
            <li className="list-city">
              <a
                className="text-primary"
                href="https://en.wikipedia.org/wiki/Paris"
                target="_blank"
                rel="noreferrer"
              >
                Paris
              </a>
            </li>
            <li className="list-city">
              <a
                className="text-primary"
                href="https://en.wikipedia.org/wiki/Los_Angeles"
                target="_blank"
                rel="noreferrer"
              >
                Los Angeles
              </a>
            </li>
            <li className="list-city">
              <a
                className="text-primary"
                href="https://en.wikipedia.org/wiki/London"
                target="_blank"
                rel="noreferrer"
              >
                London
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
