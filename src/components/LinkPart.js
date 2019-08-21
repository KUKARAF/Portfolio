import React from "react";
// import Button from "react-bootstrap/Button";
import "./LinkPart.css";
function LinkPart({ data }) {
  return (
    <a href={data.link} className="card p-2 cardLink border-0">
      <div className="card-body">
        <div className="ccc text-white">
          <div className="iconContainer pr-2">
            <i className={data.icon} />
          </div>
          <div className="textContainer">{data.name}</div>
        </div>
        <p className="card-text d-none">{data.description}</p>
      </div>
    </a>
  );
}

export default LinkPart;
