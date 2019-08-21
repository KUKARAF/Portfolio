// import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Contactform from "../components/Contactform.js";
import Link from "../components/Link.js";

class Contact extends Component {
  render() {
    return (
      <div className="container pt-4">
        <div className="row">
          <div className="col-5">
            <Contactform />
          </div>
          <div className=" ml-5  col-5">
            <Link />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
