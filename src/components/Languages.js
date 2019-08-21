import React from "react";
// import Button from "react-bootstrap/Button";

import "./Languages.css";

function Languages() {
  return (
    <div className="container">
      <h1>Languages</h1>
      <div className="row transparentBG">
        <div id="ge" className="Lang col-md-3">
          German
        </div>
        <div id="en" className="Lang col-md-3">
          English
        </div>
        <div id="es" className="Lang col-md-3">
          Spanish
        </div>
        <div id="pl" className="Lang col-md-3">
          Polish
        </div>
      </div>
    </div>
  );
}

export default Languages;
