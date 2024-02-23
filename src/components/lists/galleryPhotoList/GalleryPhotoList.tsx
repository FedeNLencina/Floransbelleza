import GalleryPhoto from "../../home/pictureGallery/galleryPhotos/GalleryPhoto";
import React from "react";
import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import "./galleryPhotoList.css";

type GalleryPhotoListProps = {
  galleryPhotoList: GalleryPhotoListItem[];
};

export function GalleryPhotoList({ galleryPhotoList }: GalleryPhotoListProps) {
  return (
    <div className="row galleryPhotoContainer">
      {galleryPhotoList.map((photoItem) => {
        return <GalleryPhoto galleryPhoto={photoItem} />;
      })}
    </div>
  );
}
