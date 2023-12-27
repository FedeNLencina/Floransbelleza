import React from "react";
import "./cardImage.css";
import { ServiceListItem } from "src/types/ServiceListItem";

type CardImageProps = {
  element: ServiceListItem;
};

export const CardImage = ({ element }: CardImageProps) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 cardCol" key={element.id}>
      <div className="card">
        <img
          src={element.imagePath}
          className="card-img-top img-fluid cardImg"
          alt="..."
        />
        <figcaption>
          <h3>
            <span>{element.title}</span>
          </h3>
        </figcaption>
      </div>
    </div>
  );
};
