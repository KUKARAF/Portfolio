import React from "react";
// import Button from "react-bootstrap/Button";

function Footer({ data }) {
  return (
    <footer className=" bg-black mt-5 page-footer font-small teal pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="    text-uppercase font-weight-bold">
              About me
            </h5>
            <p>
              I’m a hard working and dedicated professional front-end developer/user interface designer with a keen eye for detail, and a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">What i know</h5>
            <p>
The main areas of my expertise are HTML(5), CSS(3) and JavaScript but I also have knowledge of Python and C++.
            </p>
          </div>
        </div>
      </div>

      <div className="footer  text-center py-3">
        GitHub:
        <a href="https://github.com/KUKARAF">
          {" "}
          Burning_Wipf
        </a>
      </div>
    </footer>
  );
}

export default Footer;
