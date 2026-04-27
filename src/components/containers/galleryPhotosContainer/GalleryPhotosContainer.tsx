import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import { GalleryPhotoList } from "../../lists/galleryPhotoList/GalleryPhotoList";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config.database";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Loader } from "@components/loader/Loader";
import { useLocation } from "react-router-dom";

export function GalleryPhotosContainer() {
  const [galleryPhotosList, setGalleryPhotosList] = useState<
    Array<GalleryPhotoListItem>
  >([]);

  const location = useLocation();
  const currentPath = location.pathname;

  const getDatabaseName = (): string => {
    // Normalizar la ruta eliminando la barra final si existe (excepto para la raíz)
    const normalizedPath = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");

    if (normalizedPath === "/") return "photosGalleryHome";
    if (normalizedPath === "/about") return "photoGalleryAbout";

    return "";
  };

  useEffect(() => {
    const databaseName = getDatabaseName();

    if (!databaseName) {
      console.log("No se pudo determinar el nombre de la colección para la ruta:", currentPath);
      return;
    }

    const getData = async (dataBaseName: string) => {
      try {
        console.log("Intentando obtener datos de la colección:", dataBaseName);
        const photoGalleryRef = await getDocs(collection(db, dataBaseName));
        const newArray: GalleryPhotoListItem[] = [];

        if (photoGalleryRef.empty) {
          console.log("La colección está vacía:", dataBaseName);
        }

        photoGalleryRef.forEach((doc) => {
          const data = doc.data();
          const photoGalleryObject: GalleryPhotoListItem = {
            id: data.id,
            title: data.title,
            imagePath: data.imagePath,
          };
          newArray.push(photoGalleryObject);
        });

        console.log("Datos obtenidos:", newArray);
        setGalleryPhotosList(newArray);
      } catch (e) {
        console.error("Error al obtener documentos de Firebase:", e, dataBaseName);
      }
    };

    getData(databaseName);
  }, [currentPath]);

  return (
    <div>
      {galleryPhotosList.length < 1 ? (
        <Loader />
      ) : (
        <GalleryPhotoList galleryPhotoList={galleryPhotosList} />
      )}
    </div>
  );
}
