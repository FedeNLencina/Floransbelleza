import React from "react";
import "./cardImage.css";
import { ServiceListItem } from "src/types/ServiceListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { Loader } from "@components/loader/Loader";

type CardImageProps = {
  element: ServiceListItem;
};

export const CardImage = ({ element }: CardImageProps) => {
  return (
    <>
      <div
        className="col-sm-6 col-md-6 col-lg-4 cardCol d-flex justify-content-center aling-items-center"
        key={element.id}
      >
        <div className="card">
          <LazyLoadImage
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
    </>
  );
};
