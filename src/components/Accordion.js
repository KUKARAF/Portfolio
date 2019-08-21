import React from "react";

// import Button from "react-bootstrap/Button";

// import "./Accordion.css";

export default props => {
  return (
    <div className="container">
      <h1>Skills</h1>

      {props.children}
      <div className="accordion" id="accordionExample">
        {props.data.map(skill => (
          <div key={skill.id} className="card">
            <div className="card-header bg-primary" id={`heading${skill.id}`}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${skill.id}`}
                  aria-expanded="true"
                  aria-controls={`#collapse${skill.id}`}
                >
                  <span className="mr-3 d-inline-block">
                    <span
                      className="align-items-center bg-white d-flex justify-content-center rounded-circle shadow-lg"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <i className={skill.icon} />
                    </span>
                  </span>
                  <span>{skill.name}</span>
                </button>
              </h2>
            </div>

            <div
              id={`collapse${skill.id}`}
              className="collapse"
              aria-labelledby={`heading${skill.id}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">{skill.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
