import React from "react";
import { Link } from "react-router-dom";

// import Button from "react-bootstrap/Button";

import "./WelcomeCard.css";

function WelcomeCards() {
  const backgroundPath = window.location.origin + "/imgs/smoke.png";

  return (
    <div
      alt="background  iamge"
      className="container-fluid bgvect min-vh-100"
      style={{
        backgroundImage: `url(${backgroundPath})`
      }}
    >
      <div className="row pt-5">
        <div className="col-md-6 d-flex  align-items-center">
          <div>
            <h1 className="text-white">Hi I am Rafa, How can I help?</h1>
            <p className="text-white-50 transparentBG">
              Known as autonomous a team player and multitasker. I always strive
              to exceed expectations. Always willing to go the extra mile in
              order Complete the Project comply with a deadline or reach a goal.
            </p>
            <Link
              type="button"
              className="nav-link btn btn-primary btn-lg purpleButton w-25"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img
            id="propic"
            alt="my face"
            src={window.location.origin + "/imgs/profilePic.jpeg"}
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomeCards;
