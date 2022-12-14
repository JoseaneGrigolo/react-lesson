import React from "react";

import "./ratingApp.css";

export default function RatingApp() {
  return (
    <div className="RatingApp">
      <p className="pt-1 m-0 text-secondary fw-semibold font">
        {" "}
        Rating the app
      </p>

      <div className="form-check form-check-inline rating p-0 m-0 text-primary">
        <input className="form-check-input" type="checkbox" value="option1" />
        <label className="form-check-label" for="inlineCheckbox1">
          ☆
        </label>
      </div>
      <div className="form-check form-check-inline rating p-0 m-0 text-primary">
        <input className="form-check-input" type="checkbox" value="option2" />
        <label className="form-check-label" for="inlineCheckbox2">
          ☆
        </label>
      </div>
      <div className="form-check form-check-inline rating p-0 m-0 text-primary">
        <input className="form-check-input" type="checkbox" value="option3" />
        <label className="form-check-label" for="inlineCheckbox3">
          ☆
        </label>
      </div>
      <div className="form-check form-check-inline rating p-0 m-0 text-primary">
        <input className="form-check-input" type="checkbox" value="option4" />
        <label className="form-check-label" for="inlineCheckbox4">
          ☆
        </label>
      </div>
      <div className="form-check form-check-inline rating p-0 m-0 text-primary">
        <input
          className="form-check-input"
          type="checkbox"
          value="option5"
          disabled
        />
        <label className="form-check-label" for="inlineCheckbox5">
          ☆
        </label>
      </div>
    </div>
  );
}
