import GalleryPhoto from "../../home/pictureGallery/galleryPhotos/GalleryPhoto";
import React from "react";
import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import "./galleryPhotoList.css";

type GalleryPhotoListProps = {
  galleryPhotoList: GalleryPhotoListItem[];
};

export function GalleryPhotoList({ galleryPhotoList }: GalleryPhotoListProps) {
  console.log("galleryPhotoList: ", galleryPhotoList);
  return (
    <div className="row galleryPhotoContainer">
      {galleryPhotoList.map((photoItem) => {
        console.log("photoItem: ", photoItem);
        return <GalleryPhoto key={photoItem.id} galleryPhoto={photoItem} />;
      })}
    </div>
  );
}
