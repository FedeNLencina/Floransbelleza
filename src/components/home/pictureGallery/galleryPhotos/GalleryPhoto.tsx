import React from "react";
import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

type GalleryPhotoProps = {
  galleryPhoto: GalleryPhotoListItem;
};

export default function GalleryPhoto({ galleryPhoto }: GalleryPhotoProps) {
  return (
    <div className="box col-lg-3 col-3">
      <div className="imgBx">
        <LazyLoadImage
          src={galleryPhoto.imagePath}
          alt={galleryPhoto.title || "Gallery Photo"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
