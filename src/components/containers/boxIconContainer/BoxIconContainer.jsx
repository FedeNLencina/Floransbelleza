import React, { useContext, useEffect, useState } from "react";
import { ServiceHomeIconContext } from "../../../context/ServiceHomeIconContext";
import { BoxIcon } from "../../boxes/boxIcon/BoxIcon";
import "./boxIconContainer.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function BoxIconContainer({ items }) {
  const { descriptionHandler, descriptionItem } = useContext(
    ServiceHomeIconContext
  );
  const [serviceItems, setServiceItems] = useState(items);

  const firstItem = serviceItems[0];

  const [selectedService, setSelectedService] = useState(null);
  const [selected, setSelected] = useState(false);

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
      {!serviceItems ? (
        <Skeleton />
      ) : (
        <div className="container boxIconContainer">
          <div className="row d-flex justify-content-center">
            {serviceItems?.map((service) => {
              return (
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
              );
            })}
          </div>
          <div className="text-center boxIconDescriptionContainer">
            <p>{descriptionItem}</p>
          </div>
        </div>
      )}
    </>
  );
}
