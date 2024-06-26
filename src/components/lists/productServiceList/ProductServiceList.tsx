import React, { useState } from "react";
import { CardImage } from "../../cardImage/CardImage";
import { ServiceListItem } from "src/types/ServiceListItem";
import { ModalImage } from "@components/cardImage/modalImage/ModalImage";

type ProductServiceListProps = {
  services: ServiceListItem[];
};

export const ProductServiceList = ({ services }: ProductServiceListProps) => {
  const [imgPath, setImgPath] = useState("");

  const openModal = (imgPath: string) => {
    setImgPath(imgPath);
  };

  return (
    <>
      <div className="row">
        {services.map((service) => {
          return (
            <>
              <CardImage
                element={service}
                key={service.id}
                openModal={openModal}
              />
              <ModalImage imgPath={imgPath} />
            </>
          );
        })}
      </div>
    </>
  );
};
