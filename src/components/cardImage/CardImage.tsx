import React from "react";
import "./cardImage.css";
import { ServiceListItem } from "src/types/ServiceListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

type CardImageProps = {
  element: ServiceListItem;
  openModal: (imgPath: string, serviceTitle: string) => void;
};

export const CardImage = ({ element, openModal }: CardImageProps) => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 cardCol d-flex justify-content-center aling-items-center">
        <div
          className="card"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            openModal(element.imagePath, element.title);
          }}
        >
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
