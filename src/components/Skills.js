import React from "react";
// import Button from "react-bootstrap/Button";

import "./Skills.css";
//Stretch goal:  Elastic search to find goals quickly
//Stretch goal:  add hosted certificates or tests to  skills

function Skills() {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="text-center">Skills</h1>
        <input />
      </div>
      <div className="row ">
        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fas fa-users" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Team Player</h3>
            <p /> Highly adaptable, flexible professional who embraces teamwork,
            but also enjoys working independently.
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fas fa-info-circle" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title"> People Skills</h3>
            <p>
              {" "}
              Regardless how much i value tech, people will always take the
              first place. What i care most about is being helpful and making
              the world a tiny bit better. The years and years of Customer
              Support experience kind of helps.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fab fa-python" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Python</h3>
            <p>
              Years of self-taught experience. Constantly thinking up and taking
              part in tiny projects. I am in love with the simplicity and ease
              of use of python.
              <br />
              Experience with: Django, flask, selenium, mechanize, pandas, json,
              BeautifulSoup, unittest etc.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fab fa-js" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">JavaScript</h3>
            <p>
              Constantly dreaming up projects that sometimes needed to be
              deployed immediately. The easiest way to do so required
              GreasyMonkey scripts and Chrome extensions. If something needs a
              quick fix, I am the guy.{" "}
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fab fa-css3-alt" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">CSS</h3>
            <p>
              Is there anything worse than really white theme? No, there is not,
              I agree. A part of my experience comes from writing custom themes
              for all kinds of websites and developing my own websites.{" "}
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fab fa-html5" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">HTML</h3>
            <p>
              Loads of HTML experience through years if web scraping, unit
              testing and hacky chrome extensions and greasy monkey scripts.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fab fa-git" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">GIT</h3>
            <p>
              No developer can do without version control. It's a tool that I
              use on the daily.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fas fa-microchip" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Hardware</h3>
            <p>
              My journey started with simple soldering jobs over to C² like
              PIC's, raspberries and hacked PS1 consoles all the way to high
              level programming languages and software cellphone repair. A lot
              of love I have for the tech industry is paved by hardware.{" "}
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div className="item-feature__icon">
            <i className="fab fa-linux" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Linux</h3>
            <p>
              Initially it was just a way to have a free operating system but
              it's hard to not fall in Love with Linux. From years of experience
              I became somewhat a Terminal ninja.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
