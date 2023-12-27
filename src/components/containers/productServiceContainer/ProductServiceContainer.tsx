import React, { useEffect, useState } from "react";
import { productServices } from "../../../utils/productServices";
import { ProductServiceList } from "../../lists/productServiceList/ProductServiceList";
import { ServiceListItem } from "src/types/ServiceListItem";
export const ProductServiceContainer = () => {
  const [servicesArray, setServicesArray] =
    useState<Array<ServiceListItem>>(productServices);

  useEffect(() => {
    if (!servicesArray) {
      setServicesArray(productServices);
    }
  }, []);

  return (
    <div className="container">
      <ProductServiceList services={servicesArray} />
    </div>
  );
};
