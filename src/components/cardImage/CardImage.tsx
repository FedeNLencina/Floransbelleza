import React, { useEffect, useState } from "react";
import "./cardImage.css";
import { ServiceListItem } from "src/types/ServiceListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ModalImage } from "./modalImage/ModalImage";

type CardImageProps = {
  element: ServiceListItem;
};

export const CardImage = ({ element }: CardImageProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {}, [showModal]);
  return (
    <>
      <div
        className="col-sm-6 col-md-6 col-lg-4 cardCol d-flex justify-content-center aling-items-center"
        key={element.id}
      >
        <div
          className="card"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={openModal}
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
        {showModal && <ModalImage imgPath={element.imagePath} />}
      </div>
    </>
  );
};
