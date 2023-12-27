import React from "react";
import { CardImage } from "../../cardImage/CardImage";
import { ServiceListItem } from "src/types/ServiceListItem";

type ProductServiceListProps = {
  services: ServiceListItem[];
};

export const ProductServiceList = ({ services }: ProductServiceListProps) => {
  return (
    <div className="row">
      {services.map((service) => {
        return <CardImage element={service} />;
      })}
    </div>
  );
};
