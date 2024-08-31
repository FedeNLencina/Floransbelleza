import React, { useContext, useEffect, useState } from "react";
import { ServiceHomeIconContext } from "../../../context/ServiceHomeIconContext";
import { BoxIcon } from "../../boxes/boxIcon/BoxIcon";
import "./boxIconContainer.css";
import "react-loading-skeleton/dist/skeleton.css";

export function BoxIconContainer({ items }) {
  const { descriptionHandler, descriptionItem } = useContext(
    ServiceHomeIconContext
  );

  const firstItem = items.length > 1 && items[0];

  const [selectedService, setSelectedService] = useState(null);

  const serviceHandleClick = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    if (!descriptionItem) {
      descriptionHandler(firstItem.description);
    }
    if (!selectedService) {
      setSelectedService(firstItem);
    }
  }, [descriptionItem]);

  return (
    <>
      {!items.length > 1 ? (
        <Loader />
      ) : (
        <div className="container boxIconContainer">
          <div className="row d-flex justify-content-center">
            {items.map((service) => {
              return (
                service.isActive && (
                  <div
                    className={
                      selectedService === service
                        ? `col-lg-2 col-6 boxIconColumn selected`
                        : `col-lg-2 col-6 boxIconColumn`
                    }
                    key={service.id}
                    onClick={() => {
                      serviceHandleClick(service);
                    }}
                  >
                    <BoxIcon item={service}></BoxIcon>
                  </div>
                )
              );
            })}
          </div>
          {firstItem.isActive && (
            <div className="text-center boxIconDescriptionContainer">
              <p>{descriptionItem}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
