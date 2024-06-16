import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import { GalleryPhotoList } from "../../lists/galleryPhotoList/GalleryPhotoList";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config.database";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function GalleryPhotosContainer() {
  const [galleryPhotosList, setGalleryPhotosList] = useState<
    Array<GalleryPhotoListItem>
  >([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const photoGalleryRef = await getDocs(
          collection(db, "photosGalleryHome")
        );
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
        console.log("Error getting cached document:", e);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {!galleryPhotosList ? (
        <Skeleton />
      ) : (
        <GalleryPhotoList galleryPhotoList={galleryPhotosList} />
      )}
    </div>
  );
}
