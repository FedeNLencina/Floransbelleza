import React from "react";

export const ProductServiceList = ({ services }) => {
  return (
    <div className="row">
      {services.map((service) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-4" key={service.id}>
            <div className="card">
              <img src={service.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
