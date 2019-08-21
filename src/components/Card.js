import React from "react";
// import Button from "react-bootstrap/Button";

function Card({ data }) {
  return (
    <div className="card">
      {console.log(data.imgURL)}
      <img src={data.imgURL} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text text-white-50">{data.description}</p>
      </div>
    </div>
  );
}

export default Card;
