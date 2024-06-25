import React, { useState } from "react";
import { CardImage } from "../../cardImage/CardImage";
import { ServiceListItem } from "src/types/ServiceListItem";
import { ModalImage } from "@components/cardImage/modalImage/ModalImage";

type ProductServiceListProps = {
  services: ServiceListItem[];
};

export const ProductServiceList = ({ services }: ProductServiceListProps) => {
  const [imgPath, setImgPath] = useState("");
  const [showModal, setShowModal] = useState(true);

  const openModal = (imgPath: string) => {
    console.log("entro aca: ");
    console.log("imgPath: ", imgPath);
    console.log("showModal: ", showModal);

    setImgPath(imgPath);
    setShowModal(true);
  };

  const closeModal = () => {
    setImgPath("");
    setShowModal(false);
    setShowModal(true);
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
              <ModalImage
                imgPath={imgPath}
                closeModal={closeModal}
                showModal={showModal}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
