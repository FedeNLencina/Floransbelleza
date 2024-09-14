import React, { useEffect, useState } from "react";
import { BoxIconContainer } from "../../containers/boxIconContainer/BoxIconContainer";

import "./serviceHome.css";
import { ServiceHomeProvider } from "../../../context/ServiceHomeIconContext";
import { Button } from "../../commons/Button/Button";
import { Title } from "../../commons/Title/Title";
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/firebase/config.database";
import { ServiceInfoHome } from "src/types/ServiceInfoHome";
import { Loader } from "@components/loader/Loader";

export function ServiceHome() {
  const [servicesArray, setServicesArray] = useState<Array<ServiceInfoHome>>(
    []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const photoGalleryRef = await getDocs(collection(db, "servicesHome"));
        const newArray: ServiceInfoHome[] = [];

        photoGalleryRef.forEach((document) => {
          const documentRef = document.data();
          const documentId = document.id;
          const photoGalleryObject: ServiceInfoHome = {
            id: documentId,
            title: documentRef.title,
            icon: { path: documentRef.imagePath },
            description: documentRef.description,
            isActive: documentRef.isActive,
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
    <>
      {servicesArray.length > 1 ? (
        <div
          className="container-fluid serviceHomeContainer"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <Title titleText="Nuestros servicios" />
          <ServiceHomeProvider>
            <BoxIconContainer items={servicesArray} />
          </ServiceHomeProvider>
          <Button text="Ver servicios" route="/servicios" />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
