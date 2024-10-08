import React from "react";
import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

type GalleryPhotoProps = {
  galleryPhoto: GalleryPhotoListItem;
};

export default function galleryPhotosAbout({
  galleryPhoto,
}: GalleryPhotoProps) {
  return (
    <div className="box col-lg-3 col-3">
      <div className="imgBx">
        <LazyLoadImage src={galleryPhoto.imagePath} />
      </div>
      <div className="content">
        <div>
          <h2>{galleryPhoto.title}</h2>
        </div>
      </div>
    </div>
  );
}
