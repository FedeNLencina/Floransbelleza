import React from "react";
import { CardImage } from "../../cardImage/CardImage";

export const ProductServiceList = ({ services }) => {
  return (
    <div className="row">
      {services.map((service) => {
        return <CardImage element={service} />;
      })}
    </div>
  );
};
