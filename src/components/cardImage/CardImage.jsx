import React from "react";
import "./cardImage.css";

export const CardImage = ({ element }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 cardCol" key={element.id}>
      <div className="card">
        <img src={element.image} className="card-img-top" alt="..." />
      </div>
    </div>
  );
};
