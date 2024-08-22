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
  const isHomePath = currentPath === "/";
  const isAboutPath = currentPath === "/about";

  const getDatabaseName = (): string | any => {
    let databaseName;
    isHomePath ? (databaseName = "photosGalleryHome") : "";
    isAboutPath ? (databaseName = "photoGalleryAbout") : "";
    return databaseName;
  };

  useEffect(() => {
    const getData = async (dataBaseName: string) => {
      try {
        const photoGalleryRef = await getDocs(collection(db, dataBaseName));
        const newArray: GalleryPhotoListItem[] = [];

        photoGalleryRef.forEach((document) => {
          const documentRef = document.data();
          const photoGalleryObject: GalleryPhotoListItem = {
            id: documentRef.id,
            title: documentRef.title,
            imagePath: documentRef.imagePath,
          };
          newArray.push(photoGalleryObject);
        });
        setGalleryPhotosList(newArray);
      } catch (e) {
        console.log("Error getting cached document:", e, dataBaseName);
      }
    };

    getData(getDatabaseName());
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
