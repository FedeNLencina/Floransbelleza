import React, { useContext, useEffect, useState } from "react";
import { ServiceHomeIconContext } from "../../../context/ServiceHomeIconContext";
import { BoxIcon } from "../../boxes/boxIcon/BoxIcon";
import "./boxIconContainer.css";

export function BoxIconContainer({ items }) {
  const { descriptionHandler, descriptionItem } = useContext(
    ServiceHomeIconContext
  );
  const serviceItems = items;
  const firstItem = serviceItems[0];

  useEffect(() => {
    if (!descriptionItem) {
      descriptionHandler(firstItem.description);
    }
  }, [descriptionItem]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {serviceItems.map((service) => {
          return (
            <div className="col-2 boxIconColumn" key={service.id}>
              <BoxIcon item={service}></BoxIcon>
            </div>
          );
        })}
      </div>
      <div>
        <p>{descriptionItem}</p>
      </div>
    </div>
  );
}
