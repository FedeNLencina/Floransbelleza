import React from "react";
import "./pictureGalery.css";
import { TitleContainer } from "./titleContainer/TitleContainer";
import { GalleryPhotos } from "./galleryPhotos/GalleryPhotos";

export function PictureGalery() {
  return (
    <div className="pictureGalleryMainContainer">
      <div className="container">
        <TitleContainer />
        <GalleryPhotos />
      </div>
    </div>
  );
}
