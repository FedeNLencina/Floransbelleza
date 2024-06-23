import React, { useState } from "react";
import "./cardImage.css";
import { ServiceListItem } from "src/types/ServiceListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

type CardImageProps = {
  element: ServiceListItem;
};

export const CardImage = ({ element }: CardImageProps) => {
  const [imgPath, setImgPath] = useState("");

  console.log("img path: ", imgPath);
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 cardCol d-flex justify-content-center aling-items-center">
        <div className="card">
          <LazyLoadImage
            src={element.imagePath}
            className="card-img-top img-fluid cardImg"
            alt="..."
          />

          <figcaption
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              setImgPath(element.imagePath);
            }}
          >
            <h3>
              <span>{element.title}</span>
            </h3>
          </figcaption>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <LazyLoadImage
                src={imgPath}
                className="card-img-top img-fluid"
                alt={element.title}
              />

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setImgPath("");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
