import React from "react";
import { CardImage } from "../../cardImage/CardImage";
import { ServiceListItem } from "src/types/ServiceListItem";
import Skeleton from "react-loading-skeleton";
import { Loader } from "@components/loader/Loader";

type ProductServiceListProps = {
  services: ServiceListItem[];
};

export const ProductServiceList = ({ services }: ProductServiceListProps) => {
  return (
    <>
      {!services ? (
        <Loader />
      ) : (
        <div className="row">
          {services.map((service) => {
            return <CardImage element={service} />;
          })}
        </div>
      )}
    </>
  );
};
