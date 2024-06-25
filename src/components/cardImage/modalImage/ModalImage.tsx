import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface ModalImageProps {
  imgPath: string;
  closeModal: () => void;
  showModal: boolean;
}

export function ModalImage({
  imgPath,
  closeModal,
  showModal,
}: ModalImageProps) {
  return (
    <>
      {showModal && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
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
                  onClick={() => {
                    closeModal();
                  }}
                ></button>
              </div>
              <LazyLoadImage src={imgPath} className="card-img-top img-fluid" />

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
