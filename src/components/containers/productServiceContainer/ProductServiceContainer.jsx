import React, { useEffect, useState } from "react";
import { productServices } from "../../../services/productServices";
import { ProductServiceList } from "../../lists/productServiceList/ProductServiceList";
export const ProductServiceContainer = () => {
  const [servicesArray, setServicesArray] = useState(productServices);

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
