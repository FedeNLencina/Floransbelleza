import React from "react";
import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";

type GalleryPhotoProps = {
  galleryPhoto: GalleryPhotoListItem;
};

export default function GalleryPhoto({ galleryPhoto }: GalleryPhotoProps) {
  return (
    <div className="box col-lg-4 ">
      <div className="imgBx">
        <img src={galleryPhoto.imagePath} />
      </div>
      <div className="content">
        <div>
          <h2>{galleryPhoto.title}</h2>
        </div>
      </div>
    </div>
  );
}
