import React, { useEffect, useState } from "react";
import { productServices } from "../../../utils/productServices";
import { ProductServiceList } from "../../lists/productServiceList/ProductServiceList";
import { ServiceListItem } from "src/types/ServiceListItem";
import { getDocs, collection } from "firebase/firestore";
import { db } from "src/firebase/config.database";
import { Loader } from "@components/loader/Loader";

export const ProductServiceContainer = () => {
  const [servicesArray, setServicesArray] = useState<Array<ServiceListItem>>(
    []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const photoGalleryRef = await getDocs(
          collection(db, "servicesGallery")
        );
        const newArray: ServiceListItem[] = [];

        photoGalleryRef.forEach((document) => {
          const documentRef = document.data();
          const photoGalleryObject: ServiceListItem = {
            id: documentRef.id,
            title: documentRef.title,
            imagePath: documentRef.image,
            description: "",
          };
          newArray.push(photoGalleryObject);
        });
        setServicesArray(newArray);
      } catch (e) {
        console.log("Error getting cached document:", e);
      }
    };

    getData();
  }, []);
  return (
    <div className="container">
      {servicesArray.length < 1 && <Loader />}

      {servicesArray.length > 0 && (
        <ProductServiceList services={servicesArray} />
      )}
    </div>
  );
};
