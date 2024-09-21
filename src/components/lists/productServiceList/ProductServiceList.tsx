import React, { useState } from "react";
import { CardImage } from "../../cardImage/CardImage";
import { ServiceListItem } from "src/types/ServiceListItem";
import { ModalImage } from "@components/cardImage/modalImage/ModalImage";

type ProductServiceListProps = {
  services: ServiceListItem[];
};

export const ProductServiceList = ({ services }: ProductServiceListProps) => {
  const [imgPath, setImgPath] = useState<string>("");
  const [serviceTitle, setServiceTitle] = useState<string>("");

  const openModal = (imgPath: string, serviceTitle: string) => {
    setImgPath(imgPath);
    setServiceTitle(serviceTitle);
  };

  return (
    <>
      <div className="row" data-aos="flip-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
        {services.map((service) => {
          return (
            <>
              <CardImage
                element={service}
                key={service.id}
                openModal={openModal}
              />
              <ModalImage imgPath={imgPath} title={serviceTitle} />
            </>
          );
        })}
      </div>
    </>
  );
};
